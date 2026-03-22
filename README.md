# Portfolio Site Walkthrough

I have successfully built your new minimalist, black-and-white portfolio website tailored for your DevOps engineering profile.

## What Was Accomplished
- **Project Structure**: Initialized a modern React + TypeScript application using Vite.
- **Design System**: Implemented a pure minimalist monochrome theme using Vanilla CSS (`index.css`), with custom CSS variables, smooth scrolling, and elegant micro-animations (fade-ins, hover states).
- **Hero Section**: Built a full-screen landing area (`Hero.tsx`) featuring your name, title, a brief introductory paragraph, and an interactive particle background using `tsparticles`. 
- **Projects Section**: Created responsive project cards (`Projects.tsx`) highlighting your key accomplishments:
  - Automated IAM Deletion Engine (Lambda & Python)
  - CI/CD Pipeline Security Integration (OWASP & GitHub Actions)
  - Multi-Environment Infrastructure Automation (Terraform)
- **Skills Section**: Organically listed your core competencies (`Skills.tsx`) like AWS, Python/Boto3, CI/CD, and DevSecOps.
- **Navigation & Footer**: Added a sticky navigation bar with a subtle blur effect that appears on scroll, alongside a minimalist footer.

## Validation Results
- Adapted the `tsparticles` initialization methodology to match the latest v3 `@tsparticles/react` engine API.
- Verified that all TypeScript compilation issues are resolved.
- Confirmed that `npm run build` completes with a clean bill of health and produces the optimized `dist/` bundle.

## Next Steps
You can view your site locally by running the Vite development server!

```bash
cd c:\Users\shaun\Documents\Projects\protfolio-site
npm run dev
```

Feel free to open the components in your editor and tweak any text to dial in the specifics of your projects!
