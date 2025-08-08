import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.string(),
    status: v.string(), // "new", "contacted", "resolved"
  }),
  testimonials: defineTable({
    name: v.string(),
    story: v.string(),
    condition: v.string(),
    imageUrl: v.optional(v.string()),
    isApproved: v.boolean(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
