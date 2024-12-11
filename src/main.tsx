import { createRoot } from 'react-dom/client'
import posthog from 'posthog-js'
import App from './App.tsx'
import './index.css'

// Initialize PostHog
posthog.init('phc_vv6TLuNPoeLQaEoQlD7NOkvK9xXhpgyJQ5W7epZXq0k', {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only'
})

createRoot(document.getElementById("root")!).render(<App />);