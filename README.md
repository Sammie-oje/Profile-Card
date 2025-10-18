# Profile Card - HNG Stage 0

A responsive, accessible Profile Card component built with semantic HTML, modern CSS, and vanilla JavaScript. This project fulfills all requirements for the HNG Stage 0 task.

## 📋 Features

✅ **Semantic HTML**: Uses proper semantic elements (`<article>`, `<section>`, `<figure>`, `<nav>`)  
✅ **Accessibility**: External links with proper attributes, semantic structure  
✅ **Responsive Design**: Clean layout with CSS  
✅ **Testable**: All elements include required data-testid attributes  
✅ **Dynamic Content**: Real-time display of current time in milliseconds  
✅ **Modern CSS**: Flexbox layouts with clean styling  
✅ **Error Handling**: Fallback icons and proper image handling

## 🎯 Required Elements (All Present)

| Element                     | data-testid                  | Status |
| --------------------------- | ---------------------------- | ------ |
| Profile card root container | `test-profile-card`          | ✅     |
| Name (plain text)           | `test-user-name`             | ✅     |
| Short biography (paragraph) | `test-user-bio`              | ✅     |
| Current time (milliseconds) | `test-user-time`             | ✅     |
| Avatar image                | User avatar present          | ✅     |
| Social links list           | `test-user-social-links`     | ✅     |
| Individual social links     | `test-user-social-{network}` | ✅     |
| Hobbies list                | `test-user-hobbies`          | ✅     |
| Dislikes list               | `test-user-dislikes`         | ✅     |

## 🔍 Project Structure

- `index.html` - Main HTML with semantic structure
- `index.css` - Styles for the profile card
- `app.js` - JavaScript for dynamic time updates
- `assets/` - Icons and images used in the profile card

## 👤 Profile Features

- **Bio**: Front-end developer introduction
- **Social Links**: GitHub, LinkedIn, Twitter integration
- **Hobbies**: Coding, Anime, Money
- **Dislikes**: BS, Code Bugs, Mediocrity

## ♿ Accessibility Features

- Semantic HTML structure
- Proper alt text for images
- External links with `rel="noopener noreferrer"`
- Clear heading hierarchy
- Descriptive link text

## 🧪 Testing

All required `data-testid` attributes are implemented for automated testing:

- Root container: `test-profile-card`
- User name: `test-user-name`
- Biography: `test-user-bio`
- Time display: `test-user-time`
- Social links container: `test-user-social-links`
- Individual social links: `test-user-social-github`, etc.
- Hobbies and dislikes lists: `test-user-hobbies`, `test-user-dislikes`
