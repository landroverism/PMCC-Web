import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submitInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const inquiryId = await ctx.db.insert("inquiries", {
      ...args,
      status: "new",
    });
    return inquiryId;
  },
});

export const getInquiries = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("inquiries").order("desc").collect();
  },
});
