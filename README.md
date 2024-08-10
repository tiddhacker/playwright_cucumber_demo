#run command
npx cross-env browser=chrome env=qa headless=false cucumber-js --config=cucumber.js --tags="@first"
