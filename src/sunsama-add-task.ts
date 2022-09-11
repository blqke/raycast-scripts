import { runAppleScript } from 'run-applescript';

export default async function main() {
  await runAppleScript(`
    tell application "Sunsama" to activate
    tell application "System Events"
      keystroke "a"
    end tell`
  )
}
