export default ({ env }) => ({
    "users-permissions": {
        "config": {
            "jwt": {
                "expiresIn": "3d"
            }
        }
    },
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env('SMTP_PORT', 587),
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
                secure: false
                // ... any custom nodemailer options
            },
            settings: {
                defaultFrom: 'scm.aungkyawsoeoo@gmail.com',
                defaultReplyTo: 'scm.aungkyawsoeoo@gmail.com',
            },
        },
    },

    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {
                    folder: "Strapi"
                },
                delete: {},
            },
        },
    },
});