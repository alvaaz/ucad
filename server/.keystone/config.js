"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// schema.ts
var import_dotenv = __toESM(require("dotenv"));
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var import_cloudinary = require("@keystone-6/cloudinary");
import_dotenv.default.config();
function buildSlug(input) {
  return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");
}
var lists = {
  User: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } }),
      createdAt: (0, import_fields.timestamp)({
        defaultValue: { kind: "now" }
      })
    }
  }),
  Partner: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      photo: (0, import_cloudinary.cloudinaryImage)({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME,
          apiKey: process.env.CLOUDINARY_API_KEY,
          apiSecret: process.env.CLOUDINARY_API_SECRET,
          folder: process.env.CLOUDINARY_API_FOLDER
        }
      }),
      slug: (0, import_fields.text)({
        isIndexed: "unique",
        hooks: {
          resolveInput: ({
            operation,
            resolvedData,
            inputData
          }) => {
            if (operation === "create" && !inputData.slug) {
              return buildSlug(inputData.name);
            }
            return resolvedData.slug;
          }
        },
        ui: {
          listView: { fieldMode: "hidden" }
        }
      })
    }
  })
};

// config.ts
var import_dotenv2 = __toESM(require("dotenv"));
import_dotenv2.default.config();
var PORT = parseInt(process.env.PORT) || 3e3;
var DATABASE_URL = process.env.DATABASE_URL || `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}`;
var SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 30;
var SESSION_SECRET = process.env.SESSION_SECRET || require("crypto").randomBytes(32).toString("base64").replace(/[^a-zA-Z0-9]+/g, "");

// auth.ts
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
});
var session = (0, import_session.statelessSessions)({
  maxAge: SESSION_MAX_AGE,
  secret: SESSION_SECRET
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core2.config)({
    db: {
      provider: "postgresql",
      useMigrations: true,
      url: DATABASE_URL
    },
    server: {
      port: PORT,
      cors: {
        credentials: true,
        origin: [
          `localhost:3000`,
          "https://iniciativaucad.cl/"
        ]
      }
    },
    lists,
    session,
    graphql: {
      path: "/api/graphql",
      cors: {
        origin: [
          `localhost:3000`,
          "https://iniciativaucad.cl/"
        ],
        credentials: true
      }
    }
  })
);
//# sourceMappingURL=config.js.map
