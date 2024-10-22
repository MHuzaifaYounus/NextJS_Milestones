

type Post = {
    id: number,
    title: string,
    description: string,
    image: string,
    likes: number,
    comments: number,
    author: string,
    date: string,
    pageContent: string,
  }

  export const posts: Post[] = [
    {
      id: 1,
      title: "The Future of JavaScript",
      description: "An in-depth look into the future trends and updates in JavaScript for developers.",
      image: "/static/javascript.jpg",
      likes: 150,
      comments: 12,
      author: "John Doe",
      date: "2024-09-25",
      pageContent: `
        JavaScript has been the backbone of web development for over two decades. With the recent introduction of new features in ECMAScript, the language continues to evolve.
        
        In the future, we can expect significant advancements in:
        1. **JavaScript Frameworks**: Frameworks like React, Vue, and Angular will continue to grow, with new optimization techniques and developer tools emerging.
        2. **WebAssembly**: This will allow developers to run languages like C++ and Rust directly in the browser, expanding the scope of JavaScript's capabilities.
        3. **Improved Performance**: Future updates will focus on performance improvements, making JavaScript applications faster and more scalable.
  
        As a developer, staying updated with these trends will be crucial for building modern, efficient web applications.
      `,
    },
    {
      id: 2,
      title: "Understanding Async/Await",
      description: "A guide to mastering async/await in JavaScript for handling asynchronous operations.",
      image: "/static/css.png",
      likes: 200,
      comments: 24,
      author: "Jane Smith",
      date: "2024-09-20",
      pageContent: `
        Asynchronous programming in JavaScript can be challenging, but async/await simplifies this process. It allows developers to write asynchronous code that looks and behaves like synchronous code.
        
        **Why use async/await?**
        - **Cleaner Code**: Promises are useful, but chaining "then" calls can make code harder to read and maintain. Async/await improves readability.
        - **Error Handling**: With async/await, handling errors becomes simpler with try/catch blocks.
  
        Here's an example of using async/await:
        \`\`\`
        async function fetchData() {
          try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        \`\`\`
        By using async/await, you can handle promises more effectively and improve the structure of your JavaScript code.
      `,
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox",
      description: "Learn the key differences between CSS Grid and Flexbox and when to use each.",
      image: "/static/redux.png",
      likes: 180,
      comments: 18,
      author: "Emily Clark",
      date: "2024-09-15",
      pageContent: `
        Both CSS Grid and Flexbox are powerful layout tools in modern web design. While they can sometimes overlap in use cases, they each have their strengths:
        
        **Flexbox** is great for:
        - One-dimensional layouts (either a row or a column).
        - Aligning items within a container.
  
        **CSS Grid** is perfect for:
        - Two-dimensional layouts (both rows and columns).
        - Creating complex grid-based designs that adapt to different screen sizes.
  
        Example of a simple CSS Grid layout:
        \`\`\`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }
        .item {
          background-color: lightblue;
        }
        \`\`\`
        Both tools have their advantages, but knowing when to use each can help you create responsive, modern layouts.
      `,
    },
    {
      id: 4,
      title: "Optimizing React Performance",
      description: "Tips and tricks to boost the performance of your React applications.",
      image: "/static/react.jpg",
      likes: 220,
      comments: 30,
      author: "Michael Brown",
      date: "2024-09-10",
      pageContent: `
        React is an excellent tool for building interactive user interfaces, but performance can become an issue in larger applications. Here are a few tips to optimize your React apps:
        
        1. **Use Memoization**: Memoizing components using \`React.memo\` and hooks like \`useMemo\` can prevent unnecessary re-renders.
        2. **Code Splitting**: Use \`React.lazy\` and \`Suspense\` to split your code into smaller chunks, loading components only when needed.
        3. **Optimize Rendering**: Avoid unnecessary updates by properly using keys in lists and ensuring components only re-render when necessary.
  
        Here's an example of using \`useMemo\` to optimize performance:
        \`\`\`
        const expensiveCalculation = useMemo(() => {
          return heavyFunction(input);
        }, [input]);
        \`\`\`
        Following these practices will help you build faster, more efficient React applications.
      `,
    },
    {
      id: 5,
      title: "State Management with Redux",
      description: "An introduction to using Redux for state management in React applications.",
      image: "/static/images.jpg",
      likes: 240,
      comments: 35,
      author: "Sarah Johnson",
      date: "2024-09-05",
      pageContent: `
        Redux is a powerful state management tool for React applications, especially when your app's state becomes too complex to handle with \`useState\` alone.
        
        **Key Concepts**:
        - **Store**: Holds the entire state of your application.
        - **Actions**: Plain objects that represent changes to the state.
        - **Reducers**: Functions that specify how the state changes in response to actions.
  
        Example of a Redux reducer:
        \`\`\`
        const counterReducer = (state = 0, action) => {
          switch (action.type) {
            case 'INCREMENT':
              return state + 1;
            case 'DECREMENT':
              return state - 1;
            default:
              return state;
          }
        };
        \`\`\`
        Redux makes it easier to manage complex state changes across your React application, and its developer tools help debug state updates in real time.
      `,
    }
  ];