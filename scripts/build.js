import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { tenants } from '../src/config/tenants.js';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get tenant code from command line arguments
const tenantCode = process.argv[2] || null;

// Get tenant config
const tenant = tenants[tenantCode] || null;

// Create .env file with tenant configuration
const envContent = tenant
    ? `VITE_TENANT=${tenant.code}\nVITE_THEME=${tenant.theme}`
    : 'VITE_THEME=light';
console.log('env content: ', envContent);
fs.writeFileSync(path.join(__dirname, '../.env'), envContent);

// Run the build command
const log = tenant 
    ? `Building for tenant: ${tenant.name} (${tenant.code})` 
    : 'Building for default tenant';
console.log(log);
execSync('vite build', { stdio: 'inherit' });
