#!/usr/bin/env node
/**
 * Simple JWT minting script for PostgREST
 * Usage: node scripts/mint-token.js --role web_user --secret YOUR_SECRET
 * It prints a JWT to stdout.
 */
import jwt from 'jsonwebtoken';
import process from 'process';

function usage() {
  console.log(
    'Usage: node scripts/mint-token.js --role <role> --secret <jwt_secret> [--exp <seconds>]'
  );
  process.exit(1);
}

const args = process.argv.slice(2);
let role = 'web_user';
let secret = process.env.PGRST_JWT_SECRET || '';
let exp = 60 * 60 * 24 * 7; // 7 days

for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--role') role = args[++i];
  else if (a === '--secret') secret = args[++i];
  else if (a === '--exp') exp = parseInt(args[++i], 10);
}

if (!secret) {
  console.error('Error: JWT secret not provided via --secret or PGRST_JWT_SECRET env var.');
  usage();
}

const payload = { role };

const token = jwt.sign(payload, secret, { expiresIn: exp });
console.log(token);
