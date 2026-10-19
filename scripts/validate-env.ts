import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

if (!baseUrl) {
  console.error('Configuration error: BASE_URL is not set.');
  process.exit(1);
}

try {
  new URL(baseUrl);
} catch {
  console.error('Configuration error: BASE_URL must be a valid URL.');
  process.exit(1);
}

console.log(`Configuration valid: BASE_URL=${baseUrl}`);
