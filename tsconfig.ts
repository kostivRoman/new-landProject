
    {"compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "moduleResolution": "node",
        "paths": {
            "@/*":["src/*"]
        },
        "include": ["src/**/*.ts","playwright.config.ts"],
        "exclude": ["node_modules"]
    }
}