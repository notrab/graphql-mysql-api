import { cast } from "@planetscale/database";

export const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

export const options = {
  cast(field, value) {
    switch (field.name) {
      case "id": {
        return String(value);
      }
      case "onSale": {
        return Boolean(value);
      }
      default: {
        return cast(field, value);
      }
    }
  },
};
