import { axiosInstance } from "../config"
import { create } from 'zustand';
import { UserDataType } from "../types/userdata";
import toast from "react-hot-toast";

interface Content {
    _id: string;
    userId: number;
    title: string;
    type: "twitter" | "youtube";
    link: string;
  }
  
  interface ContentStore {
    contents: Content[];
    user: string | null;
    checkingAuth: boolean;
    sharedUser: string | null;
  
    refresh: () => Promise<void>;
    deleteCard: (_id: string) => Promise<void>;
    checkAuth: () => Promise<void>;
    logout: () => Promise<void>;
    login: (userData : UserDataType) => Promise<void>;
    signup: (userData : UserDataType) => Promise<void>;
    shareLink: (link : string) => Promise<void>;
  }


export const useContent = create<ContentStore>((set) => ({
    contents: [],
    user: null,
    checkingAuth: false,
    sharedUser: null,

    refresh: async () => {
        try {
            const response = await axiosInstance.get(`/api/content`);
            if (response) {
                set({ contents: [...response.data.content] });
                return;
            }
        } catch (error) {
            console.log("Error in getting content", error);
        }
    },

    deleteCard: async (_id: string) => {
        try {
            const contentId = _id;
            const response = await axiosInstance.delete('/api/content/' + contentId);
            if(response.data.success){
                set((state) => ({
                    contents: state.contents.filter((content) => content._id !== _id),
                  }));
                toast.success("Deleted");
            }
        } catch (error) {
            console.log("Error in deleting content", error);
        }
    },

    checkAuth: async () => {
        set({ checkingAuth: true });
        try {
            const response = await axiosInstance.get("/api/user/");
            if (response?.data?.success) {
                set({ user: response.data.userId });
            } else {
                set({ user: null });
            }
        } catch (error) {
            console.error("Error checking authentication:", error);
            set({ user: null });
        } finally {
            set({ checkingAuth: false });
        }
    },

    logout: async () => {
        const response = await axiosInstance.post('/api/user/logout');
        set({ checkingAuth: true });
        if (response.data.success) {
            set({ user: null });
            set({ checkingAuth: false });
            toast.success("Logout");
        };
    },

    login : async(userData) => {
        const response = await axiosInstance.post(`/api/user/login`, {
            email: userData.email,
            password: userData.password
        });
        set({ checkingAuth: true });
        if (response.data.success) {
            set({ user: response.data.userId });
            set({ checkingAuth: false });
            toast.success("Login");
        };
    },

    signup : async(userData) => {
        const response = await axiosInstance.post(`/api/user/signup`, {
            name: userData.name,
            email: userData.email,
            password: userData.password
        });
        set({ checkingAuth: true });
        if (response.data.success) {
            set({ user: response.data.userId });
            set({ checkingAuth: false });
            toast.success("Signup");
        };
    },

    shareLink : async(shareLink) => {
        try {
            const response = await axiosInstance.get(`/api/brain/${shareLink}`);
            if (response) {
                set({
                    contents: [response.data.content],
                });
                toast.success("Content shared successfully!");
            }
        } catch (error) {
            console.error("Error fetching shared content", error);
            toast.error("Failed to fetch shared content");
        }
    }
}));



