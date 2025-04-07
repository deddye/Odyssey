# Start-Dev.ps1
# Script to start the Odyssey development environment on Windows

Write-Host "Starting Odyssey development environment..." -ForegroundColor Cyan

# Start Supabase in the background
Write-Host "Starting Supabase..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd odyssey; npx supabase start" -WindowStyle Normal

# Wait for Supabase to initialize
Write-Host "Waiting for Supabase to initialize (10 seconds)..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Start Next.js client in the background
Write-Host "Starting Next.js client..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command",  "cd odyssey; npm run dev" -WindowStyle Normal

# Wait for Next.js to initialize
Write-Host "Waiting for Next.js to initialize (5 seconds)..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Start Go backend
Write-Host "Starting Go backend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server/cmd/odyssey; go run main.go" -WindowStyle Normal

Write-Host "All services started successfully!" -ForegroundColor Cyan
Write-Host "- Supabase: http://localhost:54321" -ForegroundColor Magenta
Write-Host "- Next.js: http://localhost:3000" -ForegroundColor Magenta
Write-Host "- Go API: http://localhost:42069" -ForegroundColor Magenta
Write-Host "Press Ctrl+C in each terminal window to stop the services." -ForegroundColor Yellow
