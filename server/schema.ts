import dotenv from "dotenv";

dotenv.config();

import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
  text,
  password,
  timestamp
} from '@keystone-6/core/fields';

import { cloudinaryImage } from "@keystone-6/cloudinary";

import type { Lists } from '.keystone/types';

function buildSlug(input: string) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export const lists: Lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),

      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),
  Partner: list({
  access: allowAll,
    fields: {
    name: text({ validation: { isRequired: true } }),
    photo: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
        apiKey: process.env.CLOUDINARY_API_KEY as string,
        apiSecret: process.env.CLOUDINARY_API_SECRET as string,
        folder: process.env.CLOUDINARY_API_FOLDER as string,
      },
    }),
    slug: text({
        isIndexed: "unique",
        hooks: {
          resolveInput: ({
            operation,
            resolvedData,
            inputData,
          }: {
            operation: string;
            resolvedData: any;
            inputData: any;
          }) => {
            if (operation === "create" && !inputData.slug) {
              return buildSlug(inputData.name);
            }
            return resolvedData.slug;
          },
        },
        ui: {
          listView: { fieldMode: "hidden" },
        },
      })
    }
  })
};
