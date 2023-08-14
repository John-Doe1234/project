/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/app.component.html", 
  "./src/app/about/about.component.html", 
  "./src/app/header/header.component.html", 
  "./src/app/app.component.ts", 
  "./src/app/about/about.component.ts", 
  "./src/app/header/header.component.ts", 
  "./src/app/home/home.component.html", 
  "./src/app/home/home.component.ts", 
  "./src/app/events/events.component.html", 
  "./src/app/events/events.component.ts", 
  "./src/app/footer/footer.component.html", 
  "./src/app/footer/footer.component.html"
],
  theme: {
    colors: {
      'theme-blue': '#6680f2', 
      'theme-purple': '#b897ec', 
      'theme-cream': '#f4f6f3', 
      'theme-shadow': '#5166c1'
    }, 

    extend: {
      backgroundImage: 
        {
         'sea': 'url("./app/photos/hunter-so-EAFSPKx8w2s-unsplash.jpg")', 
        'about-sea': 'url("./app/photos/aleksandr-popov-V3snakBbbfY-unsplash.jpg")', 
        'instagram': 'url("./app/photos/277-2773517_instagram-logo-white-logo-instagram-png-putih-transparent.jpg")'        
      }
    }, fontFamily: 
      { 'merriweather': 'Merriweather', 
        'merriweather-black': 'Merriweather-black', 
        'baskerville-bold': 'Baskerville-bold'
    }
  },
  plugins: [],
}

