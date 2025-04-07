#!/bin/bash
# start-dev.sh
# Script to start the Odyssey development environment on Linux/macOS

echo -e "\e[36mStarting Odyssey development environment...\e[0m"

# Start Supabase in the background
echo -e "\e[32mStarting Supabase...\e[0m"
(cd odyssey && npx supabase start) &
SUPABASE_PID=$!

# Wait for Supabase to initialize
echo -e "\e[33mWaiting for Supabase to initialize (10 seconds)...\e[0m"
sleep 10

# Start Next.js client in the background
echo -e "\e[32mStarting Next.js client...\e[0m"
(cd odyssey && npm run dev) &
NEXTJS_PID=$!

# Wait for Next.js to initialize
echo -e "\e[33mWaiting for Next.js to initialize (5 seconds)...\e[0m"
sleep 5

# Start Go backend
echo -e "\e[32mStarting Go backend...\e[0m"
(cd server/cmd/odyssey && go run main.go) &
GO_PID=$!

echo -e "\e[36mAll services started successfully!\e[0m"
echo -e "\e[35m- Supabase: http://localhost:54321\e[0m"
echo -e "\e[35m- Next.js: http://localhost:3000\e[0m"
echo -e "\e[35m- Go API: http://localhost:42069\e[0m"

echo -e "\e[33mPress Ctrl+C to stop all services.\e[0m"

# Handle script termination
trap "kill $SUPABASE_PID $NEXTJS_PID $GO_PID; exit" SIGINT SIGTERM

# Keep the script running
wait
