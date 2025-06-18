import { EntitySchema } from "typeorm";

export const Task = new EntitySchema({
  name: "Task",
  tableName: "tasks",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    title: {
      type: "varchar",
      nullable: false,
    },
    description: {
      type: "text",
      nullable: true,
    },
    status: {
      type: "enum",
      enum: ["todo", "in_progress", "done"],
      default: "todo",
    },
    dueDate: {
      type: "date",
      nullable: true,
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
    },
    updatedAt: {
      type: "timestamp",
      updateDate: true,
    },
  },
});
