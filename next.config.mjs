/** @type {import('next').NextConfig} */
const nextConfig = {
  // We run inside a git worktree, so the repo root holds another lockfile.
  // Pin the tracing/turbopack root to this project to avoid mis-inference.
  turbopack: {
    root: import.meta.dirname,
  },
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
