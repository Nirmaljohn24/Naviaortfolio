# Journalist Portfolio

A modern, unique portfolio website for journalists built with React and Tailwind CSS.

## Features

- **Personal Details Section** - Profile image and professional information
- **Anchor Work** - Instagram link to anchoring work
- **Documentary** - Instagram link with image gallery
- **Research Paper** - Display research paper title and details
- **Magazine** - PDF viewer for published articles
- **Other Links** - YouTube video link (Theera Theervu short film)

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Add your profile image:
   - Place your profile image in the `public` folder as `profile-image.jpg`
   - Or update the image path in `src/App.jsx`

3. Add documentary images:
   - Place images in the `public` folder as `doc-image-1.jpg` and `doc-image-2.jpg`
   - Or update the image paths in `src/App.jsx`

4. Add magazine PDF:
   - Place your magazine PDF in the `public` folder as `magazine.pdf`
   - Or update the PDF path in `src/App.jsx`

5. Update Instagram links:
   - Replace `https://www.instagram.com/your-anchor-work` with your actual anchor work Instagram link
   - Replace `https://www.instagram.com/your-documentary` with your actual documentary Instagram link

6. Run the development server:
```bash
npm run dev
```

7. Build for production:
```bash
npm run build
```

## Customization

- Update personal details in the header section of `src/App.jsx`
- Modify colors in `tailwind.config.js` under the `journalist` theme
- Update section content and links as needed

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)

