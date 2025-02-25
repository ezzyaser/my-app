import { pgTable, varchar, serial, integer, boolean, timestamp, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// تعريف جدول المستخدمين مع تحسين الحقول وتصحيح الأخطاء
export const usersTable = pgTable("users", {
    id: serial("id").primaryKey(), // معرف المستخدم كقيمة فريدة وزيادة تلقائية
    firstName: varchar("first_name", { length: 50 }).notNull(), // تصحيح الاسم وإضافة طول محدد
    lastName: varchar("last_name", { length: 50 }).notNull(), // نفس الشيء للاسم الأخير
    age: integer("age").notNull(),// التأكد من أن العمر رقم موجب
    address: text("address"), // حقل العنوان كبيانات نصية
    city: varchar("city").notNull(),
    email: varchar("email", { length: 100 }).unique().notNull(), // تحديد طول البريد الإلكتروني
    phone: varchar("phone", { length: 20 }).unique().notNull(), // تحديد طول رقم الهاتف
    isActive: boolean("is_active").default(true), // حالة المستخدم (نشط أو غير نشط)
    createdAt: timestamp("created_at").defaultNow().notNull(), // تاريخ الإنشاء
    updatedAt: timestamp("updated_at").defaultNow().notNull(), // تاريخ آخر تحديث
});

// تعريف جدول التعليقات
export const commentsTable = pgTable("comments", {
    id: serial("id").primaryKey(), // معرف التعليق
    userId: integer("user_id").notNull().references(() => usersTable.id), // معرف المستخدم صاحب التعليق
    postId: integer("post_id").notNull(), // معرف التدوينة المرتبطة
    content: text("content").notNull(), // محتوى التعليق
    createdAt: timestamp("created_at").defaultNow().notNull(), // تاريخ إنشاء التعليق
});

// علاقات المستخدمين
export const usersRelations = relations(usersTable, ({ one, many }) => ({
    comments: many(commentsTable), // علاقة المستخدم مع التعليقات
}));

// علاقات التعليقات
export const commentsRelations = relations(commentsTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [commentsTable.userId],
        references: [usersTable.id],
    }),
}));

