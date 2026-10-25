// =====================================================
// SKILLBRIDGE - TECHNOLOGY ROADMAPS
// File: frontend/js/roadmaps.js
// =====================================================


// 1. TECHNOLOGY ROADMAP DATA
// Keep only roadmap objects inside this array.

const roadmaps = [
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    category: "Programming",
    description: "Learn Python from basics to real-world projects.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand Python fundamentals.",
        topics: [
          ["Introduction to Python", "Python uses, installation and first program."],
          ["Variables and Data Types", "Variables, integers, floats, strings and booleans."],
          ["Operators", "Arithmetic, comparison, logical and assignment operators."],
          ["Conditional Statements", "if, elif, else and nested conditions."],
          ["Loops", "for loops, while loops, break and continue."],
          ["Strings", "Indexing, slicing and string methods."],
          ["Lists and Tuples", "Creating, accessing and modifying collections."],
          ["Sets and Dictionaries", "Unique values and key-value data."],
          ["Functions", "Parameters, arguments, return values and scope."]
        ],
        project: "Build a calculator or number-guessing game."
      },
      {
        name: "Intermediate",
        goal: "Write reusable and reliable programs.",
        topics: [
          ["File Handling", "Read and write text and CSV files."],
          ["Exception Handling", "Use try, except, else and finally."],
          ["Modules and Packages", "Import built-in and custom modules."],
          ["Object-Oriented Programming", "Classes, objects, inheritance and encapsulation."],
          ["List Comprehensions", "Create collections using concise expressions."],
          ["Lambda and Functional Tools", "Explore lambda, map, filter and zip."],
          ["Regular Expressions", "Find and validate text patterns."],
          ["Virtual Environments", "Manage project dependencies with pip and venv."],
          ["APIs and JSON", "Send HTTP requests and process JSON responses."]
        ],
        project: "Build a task manager that saves data to a file."
      },
      {
        name: "Advanced",
        goal: "Apply Python to development and data work.",
        topics: [
          ["Advanced OOP", "Composition, decorators and special methods."],
          ["Iterators and Generators", "Process data lazily and efficiently."],
          ["Testing and Debugging", "Write unit tests and debug errors."],
          ["SQL with Python", "Connect Python applications to databases."],
          ["NumPy and Pandas", "Manipulate and analyze structured data."],
          ["Flask or FastAPI", "Create backend APIs."],
          ["Logging and Configuration", "Organize application settings and logs."],
          ["Git and Project Structure", "Version control and maintainable code."],
          ["Deployment Basics", "Prepare a Python application for deployment."]
        ],
        project: "Build and deploy a Python API connected to a database."
      }
    ]
  },

  {
    id: "c",
    name: "C",
    icon: "💻",
    category: "Programming",
    description: "Build strong programming and memory fundamentals.",
    stages: [
      {
        name: "Beginner",
        goal: "Learn the foundations of C.",
        topics: [
          ["Introduction to C", "Structure of a C program and compilation."],
          ["Variables and Data Types", "int, char, float and double."],
          ["Input and Output", "Use printf and scanf."],
          ["Operators", "Arithmetic, relational and logical operators."],
          ["Conditional Statements", "if, else and switch."],
          ["Loops", "for, while and do-while."],
          ["Nested Loops", "Work with patterns and repeated operations."],
          ["Arrays", "Store and process collections of values."],
          ["Strings", "Character arrays and string functions."]
        ],
        project: "Create a menu-driven calculator."
      },
      {
        name: "Intermediate",
        goal: "Understand functions and memory.",
        topics: [
          ["Functions", "Declarations, definitions and return values."],
          ["Recursion", "Solve problems through recursive calls."],
          ["Pointers", "Addresses, dereferencing and pointer basics."],
          ["Pointers and Arrays", "Understand their relationship."],
          ["Structures and Unions", "Group related data."],
          ["Dynamic Memory", "malloc, calloc, realloc and free."],
          ["File Handling", "Read and write files."],
          ["Preprocessor Directives", "Macros, headers and conditional compilation."],
          ["Searching and Sorting", "Implement common array algorithms."]
        ],
        project: "Build a student record management system."
      },
      {
        name: "Advanced",
        goal: "Develop efficient and organized C programs.",
        topics: [
          ["Advanced Pointers", "Pointer arithmetic and pointer-to-pointer."],
          ["Function Pointers", "Pass functions as arguments."],
          ["Linked Lists", "Create and traverse linked structures."],
          ["Stacks and Queues", "Implement fundamental data structures."],
          ["Trees and Graph Basics", "Understand common data structures."],
          ["Bit Manipulation", "Use bitwise operators."],
          ["Time and Space Complexity", "Analyze algorithm efficiency."],
          ["Debugging and Memory Errors", "Identify invalid access and leaks."],
          ["Modular Programming", "Organize code across source files."]
        ],
        project: "Build a library management system using file storage."
      }
    ]
  },

  {
    id: "cpp",
    name: "C++",
    icon: "⚙️",
    category: "Programming",
    description: "Learn C++ programming, OOP and data structures.",
    stages: [
      {
        name: "Beginner",
        goal: "Learn syntax and programming fundamentals.",
        topics: [
          ["Introduction to C++", "Compiler, program structure and main."],
          ["Variables and Data Types", "Primitive types and constants."],
          ["Input and Output", "Use cin and cout."],
          ["Operators", "Arithmetic, logical and comparison operators."],
          ["Conditional Statements", "if, else and switch."],
          ["Loops", "for, while and do-while."],
          ["Arrays and Strings", "Work with arrays and std::string."],
          ["Functions", "Parameters, return values and overloading."],
          ["References", "Pass values using references."]
        ],
        project: "Build a console-based quiz application."
      },
      {
        name: "Intermediate",
        goal: "Understand object-oriented programming.",
        topics: [
          ["Classes and Objects", "Create custom data types."],
          ["Constructors and Destructors", "Control object initialization and cleanup."],
          ["Encapsulation", "Control access to class data."],
          ["Inheritance", "Reuse and extend class behavior."],
          ["Polymorphism", "Use overriding and virtual functions."],
          ["Operator Overloading", "Define operators for custom types."],
          ["STL Containers", "Use vector, map, set and unordered_map."],
          ["STL Algorithms", "Use sort, find and related algorithms."],
          ["Exception Handling", "Handle errors with exceptions."]
        ],
        project: "Create a banking system using classes."
      },
      {
        name: "Advanced",
        goal: "Write efficient modern C++ programs.",
        topics: [
          ["Pointers and Smart Pointers", "Understand ownership and memory safety."],
          ["Templates", "Write reusable generic code."],
          ["Lambda Expressions", "Create concise callable functions."],
          ["Iterators", "Traverse STL containers."],
          ["Move Semantics", "Understand move constructors and resources."],
          ["File Handling", "Read and write structured data."],
          ["Data Structures", "Implement linked lists, stacks and queues."],
          ["Algorithms and Complexity", "Analyze time and space requirements."],
          ["Modern C++ Practices", "Explore RAII and safer coding patterns."]
        ],
        project: "Build a contact manager using STL and file storage."
      }
    ]
  },

  {
    id: "java",
    name: "Java",
    icon: "☕",
    category: "Programming",
    description: "Learn Java, OOP and application development.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand Java syntax and fundamentals.",
        topics: [
          ["Introduction to Java", "JDK, JVM, JRE and first program."],
          ["Variables and Data Types", "Primitive types and variables."],
          ["Operators", "Arithmetic, logical and relational operators."],
          ["Conditional Statements", "if, else and switch."],
          ["Loops", "for, while and do-while."],
          ["Arrays", "Store and process multiple values."],
          ["Strings", "String methods and immutability."],
          ["Methods", "Parameters, return values and overloading."],
          ["Basic Input", "Read user input using Scanner."]
        ],
        project: "Create a student marks calculator."
      },
      {
        name: "Intermediate",
        goal: "Apply object-oriented Java concepts.",
        topics: [
          ["Classes and Objects", "Create and use objects."],
          ["Constructors", "Initialize object state."],
          ["Inheritance", "Extend existing classes."],
          ["Polymorphism", "Overloading and overriding."],
          ["Abstraction and Interfaces", "Design reusable contracts."],
          ["Exception Handling", "Handle runtime and checked exceptions."],
          ["Collections Framework", "Use List, Set and Map."],
          ["Generics", "Create type-safe reusable code."],
          ["File Handling", "Read and write files."]
        ],
        project: "Build a library management application."
      },
      {
        name: "Advanced",
        goal: "Prepare for backend development.",
        topics: [
          ["Lambda Expressions", "Use functional-style Java code."],
          ["Streams API", "Filter, map and process collections."],
          ["Multithreading", "Understand threads and concurrency."],
          ["JDBC", "Connect Java to a relational database."],
          ["Unit Testing", "Write tests for Java methods."],
          ["Maven or Gradle", "Manage dependencies and builds."],
          ["Spring Boot Basics", "Build REST APIs."],
          ["REST and JSON", "Design API endpoints."],
          ["Deployment Fundamentals", "Package and run applications."]
        ],
        project: "Build a Spring Boot REST API with database integration."
      }
    ]
  },

  {
    id: "r",
    name: "R",
    icon: "📊",
    category: "Data and Analytics",
    description: "Learn statistical computing and data visualization.",
    stages: [
      {
        name: "Beginner",
        goal: "Learn R syntax and data basics.",
        topics: [
          ["Introduction to R", "R, RStudio and scripts."],
          ["Variables and Data Types", "Numeric, character and logical values."],
          ["Vectors", "Create and index vectors."],
          ["Matrices and Arrays", "Work with multidimensional data."],
          ["Lists and Data Frames", "Organize different types of data."],
          ["Operators", "Arithmetic, comparison and logical operations."],
          ["Conditions", "Use if, else and switch."],
          ["Loops", "Use for, while and repeat."],
          ["Functions", "Write reusable functions."]
        ],
        project: "Create a basic marks analysis report."
      },
      {
        name: "Intermediate",
        goal: "Analyze and visualize data.",
        topics: [
          ["Importing Data", "Read CSV and other supported files."],
          ["Data Cleaning", "Handle missing and inconsistent values."],
          ["dplyr Basics", "Filter, select, arrange and summarize."],
          ["tidyr Basics", "Reshape data into useful formats."],
          ["ggplot2", "Create statistical visualizations."],
          ["Descriptive Statistics", "Calculate mean, median and spread."],
          ["Probability Basics", "Understand distributions and probability."],
          ["Correlation", "Explore relationships between variables."],
          ["Statistical Tests", "Learn hypothesis-testing fundamentals."]
        ],
        project: "Analyze and visualize a public dataset."
      },
      {
        name: "Advanced",
        goal: "Apply statistics and reproducible analysis.",
        topics: [
          ["Regression", "Fit and interpret regression models."],
          ["Classification Basics", "Explore simple classification methods."],
          ["Time Series", "Analyze observations over time."],
          ["Model Evaluation", "Measure model performance."],
          ["Advanced Visualization", "Create informative multi-layer plots."],
          ["Reusable R Scripts", "Organize analysis into functions."],
          ["R Markdown or Quarto", "Create reproducible reports."],
          ["Shiny Basics", "Build interactive data applications."],
          ["Reproducible Workflows", "Document data and analysis steps."]
        ],
        project: "Build an interactive data analysis dashboard."
      }
    ]
  },

  {
    id: "php",
    name: "PHP",
    icon: "🐘",
    category: "Web Development",
    description: "Learn server-side scripting and dynamic websites.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand PHP syntax and web fundamentals.",
        topics: [
          ["Introduction to PHP", "Server-side scripting and setup."],
          ["Variables and Data Types", "Create and use PHP variables."],
          ["Operators", "Work with expressions and comparisons."],
          ["Conditional Statements", "Use if, else and switch."],
          ["Loops", "Repeat operations using loops."],
          ["Arrays", "Indexed, associative and multidimensional arrays."],
          ["Functions", "Create reusable functions."],
          ["Strings", "Manipulate and validate text."],
          ["HTML and PHP", "Embed PHP into web pages."]
        ],
        project: "Build a personal information page."
      },
      {
        name: "Intermediate",
        goal: "Build interactive server-side applications.",
        topics: [
          ["GET and POST", "Receive data from forms."],
          ["Form Validation", "Validate and sanitize user input."],
          ["Sessions and Cookies", "Maintain user state."],
          ["File Handling", "Read and write files."],
          ["Error Handling", "Manage errors and exceptions."],
          ["MySQL Basics", "Store application data."],
          ["PDO and Prepared Statements", "Execute safer database queries."],
          ["Authentication Basics", "Build login and registration flows."],
          ["Password Security", "Hash and verify passwords."]
        ],
        project: "Build a registration and login application."
      },
      {
        name: "Advanced",
        goal: "Build maintainable web applications.",
        topics: [
          ["Object-Oriented PHP", "Classes, interfaces and traits."],
          ["Composer", "Manage packages and autoloading."],
          ["MVC Architecture", "Separate models, views and controllers."],
          ["REST APIs", "Create JSON-based endpoints."],
          ["Laravel Basics", "Explore a PHP web framework."],
          ["Authorization", "Protect routes and resources."],
          ["Testing", "Write automated application tests."],
          ["Security Fundamentals", "Understand SQL injection and XSS."],
          ["Deployment", "Configure and deploy a PHP application."]
        ],
        project: "Create a database-backed task management website."
      }
    ]
  },

  {
    id: "html",
    name: "HTML",
    icon: "🌐",
    category: "Web Development",
    description: "Learn the structure and semantics of web pages.",
    stages: [
      {
        name: "Beginner",
        goal: "Create structured web pages.",
        topics: [
          ["Introduction to HTML", "Understand elements and tags."],
          ["Document Structure", "Use html, head, body and title."],
          ["Headings and Paragraphs", "Structure readable content."],
          ["Links and Images", "Add navigation and images."],
          ["Lists", "Create ordered and unordered lists."],
          ["Tables", "Present tabular information."],
          ["Forms", "Create input fields and buttons."],
          ["Semantic Elements", "Use header, nav, main and footer."],
          ["Attributes", "Understand common HTML attributes."]
        ],
        project: "Build a personal portfolio page."
      },
      {
        name: "Intermediate",
        goal: "Build accessible, useful page layouts.",
        topics: [
          ["Form Controls", "Use input types, select and textarea."],
          ["Form Validation", "Apply required, min, max and patterns."],
          ["Audio and Video", "Embed media in pages."],
          ["iframes", "Embed external content appropriately."],
          ["Metadata", "Set viewport and page descriptions."],
          ["Accessibility Basics", "Use labels and meaningful structure."],
          ["HTML Entities", "Display reserved and special characters."],
          ["SEO Fundamentals", "Use titles and semantic content."],
          ["Organizing Multiple Pages", "Connect pages with navigation."]
        ],
        project: "Build a multi-page college information website."
      },
      {
        name: "Advanced",
        goal: "Prepare HTML for production interfaces.",
        topics: [
          ["Accessible Forms", "Improve keyboard and screen-reader usability."],
          ["ARIA Basics", "Use ARIA only when appropriate."],
          ["Responsive Viewport", "Prepare documents for mobile layouts."],
          ["Structured Data Basics", "Understand machine-readable page information."],
          ["Performance Basics", "Optimize images and loading behavior."],
          ["Security Considerations", "Use safe embedding and link practices."],
          ["HTML with CSS", "Build complete page structures."],
          ["HTML with JavaScript", "Create interactive interfaces."],
          ["Validation and Testing", "Check markup and browser behavior."]
        ],
        project: "Create an accessible, responsive multi-page website."
      }
    ]
  },

  {
    id: "css",
    name: "CSS",
    icon: "🎨",
    category: "Web Development",
    description: "Design responsive and attractive web interfaces.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand styling fundamentals.",
        topics: [
          ["Introduction to CSS", "Inline, internal and external CSS."],
          ["Selectors", "Select elements, classes and IDs."],
          ["Colors and Backgrounds", "Style colors and background images."],
          ["Typography", "Control fonts, sizes and line height."],
          ["Box Model", "Understand margin, border, padding and content."],
          ["Units", "Use px, %, em, rem and viewport units."],
          ["Display", "Understand block, inline and none."],
          ["Borders and Shadows", "Style edges and depth."],
          ["Pseudo-classes", "Style hover, focus and active states."]
        ],
        project: "Style a personal profile page."
      },
      {
        name: "Intermediate",
        goal: "Create flexible page layouts.",
        topics: [
          ["Positioning", "Use relative, absolute, fixed and sticky."],
          ["Flexbox", "Align and distribute elements."],
          ["CSS Grid", "Create two-dimensional layouts."],
          ["Responsive Design", "Adapt layouts to different screens."],
          ["Media Queries", "Apply styles based on viewport conditions."],
          ["Transitions", "Animate style changes smoothly."],
          ["Transforms", "Move, rotate and scale elements."],
          ["Pseudo-elements", "Use before and after."],
          ["CSS Variables", "Create reusable design tokens."]
        ],
        project: "Build a responsive landing page."
      },
      {
        name: "Advanced",
        goal: "Build maintainable design systems.",
        topics: [
          ["Advanced Grid", "Build complex responsive layouts."],
          ["Responsive Typography", "Use fluid sizing and clamp."],
          ["Animations", "Create keyframe-based motion."],
          ["Specificity and Cascade", "Debug conflicting styles."],
          ["Reusable Components", "Create consistent component styles."],
          ["Design Tokens", "Organize colors, spacing and typography."],
          ["Accessibility Styling", "Support focus and reduced motion."],
          ["CSS Architecture", "Organize large stylesheets."],
          ["Performance and Debugging", "Inspect layout and rendering issues."]
        ],
        project: "Design a responsive dashboard interface."
      }
    ]
  },

  {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    category: "Web Development",
    description: "Build interactive websites and browser applications.",
    stages: [
      {
        name: "Beginner",
        goal: "Learn programming with JavaScript.",
        topics: [
          ["Introduction to JavaScript", "Run JavaScript in a browser."],
          ["Variables", "Understand let, const and scope basics."],
          ["Data Types", "Work with strings, numbers and booleans."],
          ["Operators", "Use arithmetic and comparison operators."],
          ["Conditions", "Write if, else and switch statements."],
          ["Loops", "Repeat operations using loops."],
          ["Functions", "Create reusable functions."],
          ["Arrays", "Store and process collections."],
          ["Objects", "Represent data using key-value properties."]
        ],
        project: "Build a number-guessing game."
      },
      {
        name: "Intermediate",
        goal: "Create interactive browser experiences.",
        topics: [
          ["DOM Basics", "Select and modify HTML elements."],
          ["Events", "Respond to clicks, typing and form submissions."],
          ["Array Methods", "Use map, filter, find and reduce."],
          ["ES Modules", "Organize code with import and export."],
          ["JSON", "Serialize and parse data."],
          ["Promises", "Handle asynchronous operations."],
          ["Async and Await", "Write readable asynchronous code."],
          ["Fetch API", "Request data from a server."],
          ["Local Storage", "Store simple browser-side data."]
        ],
        project: "Build a task manager with saved tasks."
      },
      {
        name: "Advanced",
        goal: "Prepare for modern frontend development.",
        topics: [
          ["Closures", "Understand functions and lexical scope."],
          ["Prototypes", "Explore JavaScript inheritance."],
          ["Error Handling", "Use try, catch and custom errors."],
          ["Modules and Bundling", "Understand modern project tooling."],
          ["API Integration", "Connect interfaces to backend services."],
          ["Frontend Security", "Avoid unsafe DOM insertion."],
          ["Testing", "Write tests for application behavior."],
          ["React Fundamentals", "Learn components, props and state."],
          ["Deployment", "Build and deploy a frontend application."]
        ],
        project: "Create a frontend app that consumes a REST API."
      }
    ]
  },

  {
    id: "data-analysis",
    name: "Data Analysis",
    icon: "📈",
    category: "Data and Analytics",
    description: "Turn raw data into insights and useful reports.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand data and basic analysis.",
        topics: [
          ["Introduction to Data Analysis", "Understand the analysis workflow."],
          ["Types of Data", "Categorical, numerical and time-based data."],
          ["Spreadsheet Basics", "Use formulas and cell references."],
          ["Sorting and Filtering", "Find relevant records."],
          ["Data Cleaning", "Identify duplicates and missing values."],
          ["Descriptive Statistics", "Calculate mean, median and mode."],
          ["Charts and Graphs", "Choose appropriate visualizations."],
          ["SQL Basics", "Retrieve data from databases."],
          ["Analytical Questions", "Translate business questions into metrics."]
        ],
        project: "Analyze a small sales dataset using spreadsheets."
      },
      {
        name: "Intermediate",
        goal: "Analyze datasets with common tools.",
        topics: [
          ["Excel Functions", "Use lookup and conditional functions."],
          ["Pivot Tables", "Summarize large datasets."],
          ["SQL Filtering", "Use WHERE, ORDER BY and LIMIT."],
          ["SQL Aggregation", "Use GROUP BY and aggregate functions."],
          ["SQL Joins", "Combine related tables."],
          ["Python for Analysis", "Use Python to process data."],
          ["Pandas", "Clean, transform and summarize data."],
          ["Exploratory Analysis", "Find patterns and anomalies."],
          ["Dashboard Basics", "Present metrics visually."]
        ],
        project: "Analyze sales trends and create a dashboard."
      },
      {
        name: "Advanced",
        goal: "Communicate evidence-based recommendations.",
        topics: [
          ["Advanced SQL", "Use subqueries and window functions."],
          ["Statistical Reasoning", "Understand variation and uncertainty."],
          ["Cohort Analysis", "Compare groups over time."],
          ["Funnel Analysis", "Measure conversion across steps."],
          ["A/B Testing Basics", "Compare outcomes carefully."],
          ["Dashboard Design", "Build clear and useful reports."],
          ["KPI Development", "Define measurable business indicators."],
          ["Data Storytelling", "Explain insights and recommendations."],
          ["Portfolio Case Studies", "Document decisions and findings."]
        ],
        project: "Complete an end-to-end business analytics case study."
      }
    ]
  },

  {
    id: "data-science",
    name: "Data Science",
    icon: "🔬",
    category: "Data and Analytics",
    description: "Combine statistics, programming and machine learning.",
    stages: [
      {
        name: "Beginner",
        goal: "Build foundations for data science.",
        topics: [
          ["Introduction to Data Science", "Understand the data science lifecycle."],
          ["Python Fundamentals", "Learn Python for data work."],
          ["NumPy", "Perform numerical operations."],
          ["Pandas", "Work with tabular data."],
          ["Data Cleaning", "Handle missing and inconsistent values."],
          ["Data Visualization", "Create charts with common libraries."],
          ["Descriptive Statistics", "Summarize data distributions."],
          ["Probability", "Understand events and probability."],
          ["Exploratory Data Analysis", "Investigate patterns and outliers."]
        ],
        project: "Explore a public dataset and present findings."
      },
      {
        name: "Intermediate",
        goal: "Build and evaluate predictive models.",
        topics: [
          ["Linear Algebra Basics", "Understand vectors and matrices."],
          ["Statistical Inference", "Explore samples and populations."],
          ["Feature Engineering", "Prepare useful model inputs."],
          ["Train-Test Split", "Separate training and evaluation data."],
          ["Regression", "Predict numerical values."],
          ["Classification", "Predict categories."],
          ["Model Evaluation", "Use appropriate evaluation metrics."],
          ["Scikit-learn", "Build machine learning pipelines."],
          ["Cross-validation", "Evaluate model stability."]
        ],
        project: "Build a supervised machine learning prediction model."
      },
      {
        name: "Advanced",
        goal: "Develop reliable end-to-end data projects.",
        topics: [
          ["Unsupervised Learning", "Explore clustering and dimensionality reduction."],
          ["Hyperparameter Tuning", "Improve model configuration."],
          ["Imbalanced Data", "Evaluate approaches to rare classes."],
          ["Time Series", "Analyze temporal data."],
          ["Model Interpretability", "Explain model behavior."],
          ["Data Pipelines", "Automate repeatable data preparation."],
          ["Experiment Tracking", "Record model experiments."],
          ["Deployment Basics", "Expose models through APIs."],
          ["Ethics and Data Privacy", "Consider bias, consent and privacy."]
        ],
        project: "Deploy a documented machine learning application."
      }
    ]
  },

  {
    id: "ai",
    name: "Artificial Intelligence",
    icon: "🤖",
    category: "Artificial Intelligence",
    description: "Explore intelligent systems and AI problem-solving.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand AI and its foundations.",
        topics: [
          ["Introduction to AI", "Explore AI applications and limitations."],
          ["Python for AI", "Use Python for AI experiments."],
          ["Problem Solving", "Represent states and possible actions."],
          ["Search Algorithms", "Explore BFS, DFS and informed search."],
          ["Logic Basics", "Represent facts and rules."],
          ["Probability Basics", "Reason under uncertainty."],
          ["Knowledge Representation", "Organize facts and relationships."],
          ["Machine Learning Overview", "Understand learning from data."],
          ["AI Ethics", "Explore fairness, safety and accountability."]
        ],
        project: "Build a rule-based question-answering assistant."
      },
      {
        name: "Intermediate",
        goal: "Implement common intelligent techniques.",
        topics: [
          ["Heuristic Search", "Use heuristics to guide search."],
          ["Constraint Satisfaction", "Solve problems with constraints."],
          ["Decision Trees", "Make predictions using decision rules."],
          ["Supervised Learning", "Learn from labeled examples."],
          ["Unsupervised Learning", "Find patterns in unlabeled data."],
          ["Natural Language Processing", "Process and analyze text."],
          ["Computer Vision Basics", "Understand image-processing tasks."],
          ["Neural Network Basics", "Explore layers, weights and activation."],
          ["Model Evaluation", "Measure quality and generalization."]
        ],
        project: "Build an AI application for a focused problem."
      },
      {
        name: "Advanced",
        goal: "Explore modern AI systems.",
        topics: [
          ["Deep Learning", "Understand neural network architectures."],
          ["Transformer Fundamentals", "Explore attention-based architectures."],
          ["Large Language Models", "Understand LLM capabilities and limits."],
          ["Prompt Design", "Write and evaluate clear instructions."],
          ["Retrieval-Augmented Generation", "Ground responses in retrieved information."],
          ["AI Agents", "Explore tool use and multi-step tasks."],
          ["Evaluation and Guardrails", "Test reliability and reduce unsafe output."],
          ["AI API Integration", "Connect models to applications."],
          ["Responsible Deployment", "Monitor cost, privacy and performance."]
        ],
        project: "Build an AI assistant with a documented evaluation plan."
      }
    ]
  },

  {
    id: "ml",
    name: "Machine Learning",
    icon: "🧠",
    category: "Artificial Intelligence",
    description: "Train models to learn patterns from data.",
    stages: [
      {
        name: "Beginner",
        goal: "Learn the foundations of machine learning.",
        topics: [
          ["Introduction to ML", "Understand training and prediction."],
          ["Python for ML", "Use Python and common libraries."],
          ["NumPy and Pandas", "Prepare numerical and tabular data."],
          ["Data Visualization", "Explore distributions and relationships."],
          ["Statistics Basics", "Understand mean, variance and distributions."],
          ["Supervised Learning", "Learn from labeled examples."],
          ["Unsupervised Learning", "Discover patterns without labels."],
          ["Features and Labels", "Define model inputs and targets."],
          ["Train-Test Split", "Evaluate models on unseen examples."]
        ],
        project: "Create a simple prediction model."
      },
      {
        name: "Intermediate",
        goal: "Train and evaluate common algorithms.",
        topics: [
          ["Linear Regression", "Predict continuous values."],
          ["Logistic Regression", "Model classification probabilities."],
          ["Decision Trees", "Learn rule-based predictions."],
          ["Random Forests", "Combine multiple decision trees."],
          ["K-Nearest Neighbors", "Predict using nearby observations."],
          ["Support Vector Machines", "Learn margin-based classification."],
          ["Clustering", "Group similar observations."],
          ["Evaluation Metrics", "Choose metrics for the task."],
          ["Cross-validation", "Estimate performance across data splits."]
        ],
        project: "Build and compare several classification models."
      },
      {
        name: "Advanced",
        goal: "Improve model quality and reproducibility.",
        topics: [
          ["Feature Engineering", "Create and transform predictive inputs."],
          ["Pipeline Design", "Combine preprocessing and model training."],
          ["Hyperparameter Tuning", "Search for useful model settings."],
          ["Ensemble Methods", "Explore boosting and model combinations."],
          ["Imbalanced Classification", "Handle unequal class distributions."],
          ["Model Interpretability", "Understand predictions and feature effects."],
          ["Experiment Tracking", "Record data and model configurations."],
          ["Model Deployment", "Serve predictions through an API."],
          ["Monitoring and Drift", "Check model quality after deployment."]
        ],
        project: "Deploy an evaluated ML model with a prediction API."
      }
    ]
  },

  {
    id: "deep-learning",
    name: "Deep Learning",
    icon: "🕸️",
    category: "Artificial Intelligence",
    description: "Learn neural networks and deep learning architectures.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand neural network fundamentals.",
        topics: [
          ["Introduction to Deep Learning", "Understand neural networks and use cases."],
          ["Linear Algebra", "Review vectors and matrices."],
          ["Calculus Basics", "Understand derivatives and gradients."],
          ["Perceptrons", "Learn the basic artificial neuron."],
          ["Activation Functions", "Explore ReLU, sigmoid and softmax."],
          ["Loss Functions", "Measure prediction error."],
          ["Gradient Descent", "Update model parameters."],
          ["Backpropagation", "Compute gradients through layers."],
          ["Overfitting and Regularization", "Improve generalization."]
        ],
        project: "Train a small neural network on a simple dataset."
      },
      {
        name: "Intermediate",
        goal: "Build neural networks for common tasks.",
        topics: [
          ["Tensor Operations", "Work with tensors."],
          ["PyTorch or TensorFlow", "Use a deep learning framework."],
          ["Training Loops", "Implement forward and backward passes."],
          ["Optimizers", "Explore SGD and Adam."],
          ["Convolutional Neural Networks", "Learn image feature extraction."],
          ["Image Classification", "Train a model on labeled images."],
          ["Embeddings", "Represent items as numerical vectors."],
          ["Sequence Models", "Understand recurrent model basics."],
          ["Model Evaluation", "Measure training and validation performance."]
        ],
        project: "Build an image classification model."
      },
      {
        name: "Advanced",
        goal: "Explore advanced architectures and deployment.",
        topics: [
          ["Transfer Learning", "Adapt pretrained models."],
          ["Attention Mechanisms", "Understand attention in neural networks."],
          ["Transformer Models", "Explore modern sequence architectures."],
          ["Autoencoders", "Learn representation and reconstruction."],
          ["Generative Models", "Understand approaches to generating data."],
          ["Distributed Training Basics", "Explore training across devices."],
          ["Experiment Management", "Track datasets and model configurations."],
          ["Inference Optimization", "Reduce latency and resource use."],
          ["Deployment and Monitoring", "Serve and monitor model predictions."]
        ],
        project: "Build and deploy a deep learning application."
      }
    ]
  },

  {
    id: "genai",
    name: "Generative AI",
    icon: "✨",
    category: "Generative AI",
    description: "Learn LLMs, prompting, RAG and AI applications.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand generative AI fundamentals.",
        topics: [
          ["Introduction to Generative AI", "Understand generative models and use cases."],
          ["AI and LLM Fundamentals", "Learn what large language models do."],
          ["Tokens and Context Windows", "Understand input length and tokenization."],
          ["Prompt Engineering", "Write clear and effective prompts."],
          ["LLM Limitations", "Understand hallucinations and uncertainty."],
          ["Model APIs", "Call a language model from code."],
          ["Structured Outputs", "Request predictable data formats."],
          ["Embeddings Basics", "Represent text as vectors."],
          ["Responsible AI", "Consider privacy, bias and safe usage."]
        ],
        project: "Build a simple study assistant using an LLM API."
      },
      {
        name: "Intermediate",
        goal: "Build grounded LLM applications.",
        topics: [
          ["Prompt Templates", "Reuse prompts with structured inputs."],
          ["Conversation History", "Manage context across interactions."],
          ["Document Processing", "Load and split source documents."],
          ["Vector Databases", "Store and search embeddings."],
          ["Semantic Search", "Retrieve relevant text by meaning."],
          ["RAG Fundamentals", "Generate answers using retrieved context."],
          ["Chunking Strategies", "Split documents for retrieval."],
          ["RAG Evaluation", "Assess retrieval and answer quality."],
          ["Frontend and Backend Integration", "Connect a chatbot to a web app."]
        ],
        project: "Build a document-based question-answering chatbot."
      },
      {
        name: "Advanced",
        goal: "Build reliable and evaluated GenAI systems.",
        topics: [
          ["Advanced Retrieval", "Explore hybrid search and reranking."],
          ["RAG Improvements", "Improve context relevance and answer grounding."],
          ["Tool Calling", "Allow models to use approved functions."],
          ["AI Agent Fundamentals", "Plan multi-step tool-assisted tasks."],
          ["Fine-tuning Overview", "Understand when model adaptation helps."],
          ["Guardrails", "Validate inputs and outputs."],
          ["LLM Evaluation", "Test accuracy, relevance and safety."],
          ["Latency and Cost", "Measure tokens, speed and API cost."],
          ["Deployment and Monitoring", "Operate and monitor an AI application."]
        ],
        project: "Build a RAG assistant with evaluation and safety checks."
      }
    ]
  },

  {
    id: "aws",
    name: "AWS",
    icon: "☁️",
    category: "Cloud Computing",
    description: "Learn cloud infrastructure and application deployment.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand cloud computing and AWS basics.",
        topics: [
          ["Cloud Computing Fundamentals", "Understand cloud service models."],
          ["AWS Global Infrastructure", "Explore regions and availability zones."],
          ["IAM Basics", "Understand identities and permissions."],
          ["EC2 Basics", "Run virtual servers."],
          ["S3 Basics", "Store objects and files."],
          ["VPC Fundamentals", "Understand virtual networking."],
          ["Security Groups", "Control network access to resources."],
          ["Billing and Budgets", "Monitor cloud spending."],
          ["AWS Console and CLI", "Access services through different interfaces."]
        ],
        project: "Host a static website using Amazon S3."
      },
      {
        name: "Intermediate",
        goal: "Deploy applications using AWS services.",
        topics: [
          ["Load Balancers", "Distribute incoming traffic."],
          ["Auto Scaling", "Adjust compute capacity."],
          ["RDS Basics", "Use managed relational databases."],
          ["Lambda", "Run serverless functions."],
          ["API Gateway", "Expose managed API endpoints."],
          ["CloudWatch", "Monitor logs and metrics."],
          ["Route 53", "Understand DNS and routing."],
          ["CloudFront", "Deliver content through a CDN."],
          ["Secrets Management", "Store sensitive configuration safely."]
        ],
        project: "Deploy a small web application with a database."
      },
      {
        name: "Advanced",
        goal: "Design secure and maintainable cloud systems.",
        topics: [
          ["Infrastructure as Code", "Understand CloudFormation or similar tools."],
          ["Containers", "Package applications with Docker."],
          ["ECS or EKS Overview", "Explore container orchestration."],
          ["CI/CD", "Automate application build and deployment."],
          ["Serverless Architecture", "Combine managed serverless services."],
          ["Cloud Security", "Apply least privilege and secure defaults."],
          ["High Availability", "Design for service resilience."],
          ["Cost Optimization", "Review resource usage and cost."],
          ["Architecture Design", "Choose services for a real workload."]
        ],
        project: "Deploy a monitored cloud application using automated deployment."
      }
    ]
  },

  {
    id: "azure",
    name: "Microsoft Azure",
    icon: "🔷",
    category: "Cloud Computing",
    description: "Learn Azure services, cloud security and deployment.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand Azure and core cloud services.",
        topics: [
          ["Cloud Computing Basics", "Understand IaaS, PaaS and SaaS."],
          ["Azure Global Infrastructure", "Explore regions and availability zones."],
          ["Subscriptions and Resource Groups", "Organize Azure resources."],
          ["Microsoft Entra ID", "Understand identity and access."],
          ["Azure Virtual Machines", "Run virtual servers."],
          ["Azure Storage", "Store files and objects."],
          ["Virtual Networks", "Understand cloud networking."],
          ["Azure Portal and CLI", "Manage resources."],
          ["Cost Management", "Review budgets and spending."]
        ],
        project: "Deploy a static website using Azure Storage."
      },
      {
        name: "Intermediate",
        goal: "Deploy and operate cloud applications.",
        topics: [
          ["Azure App Service", "Host web applications."],
          ["Azure Functions", "Run event-driven serverless code."],
          ["Azure SQL Database", "Use managed relational databases."],
          ["Azure Monitor", "Collect metrics and logs."],
          ["Application Insights", "Monitor application performance."],
          ["Key Vault", "Manage secrets and keys."],
          ["Azure Networking", "Understand routing and network security."],
          ["Containers in Azure", "Explore managed container options."],
          ["Backup and Recovery", "Protect application data."]
        ],
        project: "Deploy a web app with a managed database."
      },
      {
        name: "Advanced",
        goal: "Design secure, scalable cloud solutions.",
        topics: [
          ["Infrastructure as Code", "Use ARM templates or Bicep basics."],
          ["CI/CD", "Automate application delivery."],
          ["Identity and Governance", "Apply access and policy controls."],
          ["Private Networking", "Understand private connectivity."],
          ["Scalability and Resilience", "Design for reliability."],
          ["Container Orchestration", "Explore Azure Kubernetes Service."],
          ["Cost Optimization", "Manage resource efficiency."],
          ["Architecture Frameworks", "Apply cloud design principles."],
          ["Operational Monitoring", "Respond to alerts and incidents."]
        ],
        project: "Build a secure cloud application with monitoring and deployment automation."
      }
    ]
  },

  {
    id: "business-analyst",
    name: "Business Analyst",
    icon: "📋",
    category: "Business and Analytics",
    description: "Bridge business needs, data and technology solutions.",
    stages: [
      {
        name: "Beginner",
        goal: "Understand the business analyst role.",
        topics: [
          ["Business Analysis Fundamentals", "Understand responsibilities and deliverables."],
          ["Business Problems", "Define problems and desired outcomes."],
          ["Stakeholder Identification", "Identify people affected by a project."],
          ["Communication Skills", "Ask questions and document decisions."],
          ["Requirements Basics", "Understand functional and nonfunctional requirements."],
          ["Process Mapping", "Draw simple business workflows."],
          ["Excel Fundamentals", "Organize and summarize business data."],
          ["SQL Fundamentals", "Retrieve data for analysis."],
          ["Documentation", "Write clear notes and requirements."]
        ],
        project: "Document requirements for a simple college application."
      },
      {
        name: "Intermediate",
        goal: "Analyze requirements and business processes.",
        topics: [
          ["Requirement Elicitation", "Gather needs through interviews and workshops."],
          ["User Stories", "Describe needs from a user's perspective."],
          ["Acceptance Criteria", "Define testable completion conditions."],
          ["Use Case Diagrams", "Represent actors and system behavior."],
          ["BPMN Basics", "Model business processes."],
          ["Gap Analysis", "Compare current and desired states."],
          ["SQL for Analysis", "Query and summarize business data."],
          ["Power BI or Tableau", "Create reports and dashboards."],
          ["Agile and Scrum", "Understand iterative project delivery."]
        ],
        project: "Create requirements and a dashboard for a business scenario."
      },
      {
        name: "Advanced",
        goal: "Support solution design and delivery.",
        topics: [
          ["Advanced Requirements", "Manage dependencies and changing requirements."],
          ["Prioritization", "Rank work by value and urgency."],
          ["Root Cause Analysis", "Identify causes of business problems."],
          ["KPI Design", "Define measurable success indicators."],
          ["Data-Driven Decisions", "Use evidence to compare options."],
          ["UAT Planning", "Plan user acceptance testing."],
          ["Change Management", "Support users during transitions."],
          ["Risk and Impact Analysis", "Assess potential project risks."],
          ["Portfolio Case Study", "Present the problem, analysis and recommendation."]
        ],
        project: "Prepare a complete business analysis case study with requirements, process maps and KPIs."
      }
    ]
  }
];


// =====================================================
// 2. PAGE ELEMENTS
// These IDs must match roadmaps.html.
// =====================================================

const technologyGrid = document.getElementById("technologyGrid");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");
const technologyCount = document.getElementById("technologyCount");

const roadmapSection = document.getElementById("roadmapSection");
const roadmapTitle = document.getElementById("roadmapTitle");
const roadmapDescription = document.getElementById("roadmapDescription");
const roadmapStages = document.getElementById("roadmapStages");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const progressDetails = document.getElementById("progressDetails");
const resetProgressButton = document.getElementById("resetProgress");

const PROGRESS_KEY = "skillbridgeRoadmapProgress";
const SELECTED_KEY = "skillbridgeSelectedRoadmap";

let selectedRoadmapId = null;


// =====================================================
// 3. STORAGE HELPERS
// =====================================================

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch (error) {
    console.error("Unable to read roadmap progress:", error);
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function getTopicId(stageIndex, topicIndex) {
  return `${stageIndex}-${topicIndex}`;
}

function getAllTopics(roadmap) {
  return roadmap.stages.flatMap((stage, stageIndex) =>
    stage.topics.map((topic, topicIndex) => ({
      id: getTopicId(stageIndex, topicIndex),
      title: topic[0],
      description: topic[1],
      stage: stage.name
    }))
  );
}


// =====================================================
// 4. RENDER TECHNOLOGY CARDS
// =====================================================

function renderTechnologyCards(filter = "") {
  if (!technologyGrid) return;

  const query = filter.trim().toLowerCase();

  const filteredRoadmaps = roadmaps.filter(roadmap =>
    roadmap.name.toLowerCase().includes(query) ||
    roadmap.category.toLowerCase().includes(query) ||
    roadmap.description.toLowerCase().includes(query)
  );

  if (technologyCount) {
    technologyCount.textContent =
      `${filteredRoadmaps.length} technologies`;
  }

  if (emptyMessage) {
    emptyMessage.hidden = filteredRoadmaps.length !== 0;
  }

  technologyGrid.innerHTML = filteredRoadmaps.map(roadmap => `
    <button
      class="technology-card ${
        selectedRoadmapId === roadmap.id ? "selected" : ""
      }"
      type="button"
      data-roadmap-id="${escapeHTML(roadmap.id)}"
      aria-pressed="${selectedRoadmapId === roadmap.id}"
    >
      <div class="card-top">
        <span class="technology-icon">${roadmap.icon}</span>

        <div>
          <h3>${escapeHTML(roadmap.name)}</h3>
          <span class="eyebrow">
            ${escapeHTML(roadmap.category)}
          </span>
        </div>
      </div>

      <p>${escapeHTML(roadmap.description)}</p>

      <div class="card-bottom">
        <span>${getAllTopics(roadmap).length} learning topics</span>
        <span>View roadmap →</span>
      </div>
    </button>
  `).join("");
}


// =====================================================
// 5. OPEN A ROADMAP
// =====================================================

function openRoadmap(roadmapId, shouldScroll = true) {
  const roadmap = roadmaps.find(item => item.id === roadmapId);

  if (!roadmap) return;

  selectedRoadmapId = roadmap.id;

  localStorage.setItem(SELECTED_KEY, roadmap.id);

  renderTechnologyCards(searchInput ? searchInput.value : "");

  if (roadmapTitle) {
    roadmapTitle.textContent = `${roadmap.name} Roadmap`;
  }

  if (roadmapDescription) {
    roadmapDescription.textContent = roadmap.description;
  }

  if (roadmapSection) {
    roadmapSection.hidden = false;
  }

  renderStages(roadmap);

  if (shouldScroll && roadmapSection) {
    roadmapSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


// =====================================================
// 6. RENDER ROADMAP STAGES AND TOPICS
// =====================================================

function renderStages(roadmap) {
  if (!roadmapStages) return;

  const progress = readProgress();
  const completedTopics = progress[roadmap.id] || {};

  roadmapStages.innerHTML = roadmap.stages.map(
    (stage, stageIndex) => {

      const topicsHTML = stage.topics.map(
        (topic, topicIndex) => {

          const topicId = getTopicId(stageIndex, topicIndex);
          const isComplete = Boolean(completedTopics[topicId]);

          const notesURL = new URL(
            "notes.html",
            window.location.href
          );

          notesURL.searchParams.set(
            "technology",
            roadmap.id
          );

          notesURL.searchParams.set(
            "topic",
            topicId
          );

          const practiceURL = new URL(
            "practice.html",
            window.location.href
          );

          practiceURL.searchParams.set(
            "technology",
            roadmap.id
          );

          practiceURL.searchParams.set(
            "topic",
            topicId
          );

          return `
            <article class="topic ${
              isComplete ? "completed" : ""
            }">

              <input
                class="topic-check"
                type="checkbox"
                data-topic-id="${topicId}"
                aria-label="Mark ${escapeHTML(topic[0])} completed"
                ${isComplete ? "checked" : ""}
              >

              <div class="topic-main">
                <h4>${escapeHTML(topic[0])}</h4>

                <p>${escapeHTML(topic[1])}</p>

                <div class="topic-actions">
                  <a
                    class="topic-link"
                    href="${notesURL.href}"
                    data-action="notes"
                    data-topic-id="${topicId}"
                  >
                    Read Notes →
                  </a>

                  <a
                    class="topic-link practice-link"
                    href="${practiceURL.href}"
                    data-action="practice"
                    data-topic-id="${topicId}"
                  >
                    Practice This Topic →
                  </a>
                </div>
              </div>

            </article>
          `;
        }
      ).join("");

      return `
        <section class="stage">

          <div class="stage-heading">
            <span class="stage-number">${stageIndex + 1}</span>

            <div>
              <h3>${escapeHTML(stage.name)}</h3>
              <p>${escapeHTML(stage.goal)}</p>
            </div>
          </div>

          <div class="stage-topics">
            ${topicsHTML}
          </div>

          <div class="project-box">
            <strong>🎯 Stage Project</strong>
            <p>${escapeHTML(stage.project)}</p>
          </div>

        </section>
      `;
    }
  ).join("");

  updateProgress(roadmap);
}


// =====================================================
// 7. UPDATE PROGRESS
// =====================================================

function updateProgress(roadmap) {
  const progress = readProgress();
  const completedTopics = progress[roadmap.id] || {};

  const allTopics = getAllTopics(roadmap);

  const completedCount = allTopics.filter(
    topic => completedTopics[topic.id]
  ).length;

  const percentage = allTopics.length
    ? Math.round((completedCount / allTopics.length) * 100)
    : 0;

  if (progressText) {
    progressText.textContent = `${percentage}% complete`;
  }

  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute("aria-valuenow", String(percentage));
  }

  if (progressDetails) {
    progressDetails.textContent =
      `${completedCount} of ${allTopics.length} topics completed`;
  }
}


// =====================================================
// 8. TECHNOLOGY CARD CLICK
// =====================================================

if (technologyGrid) {
  technologyGrid.addEventListener("click", event => {
    const card = event.target.closest("[data-roadmap-id]");

    if (!card) return;

    openRoadmap(card.dataset.roadmapId);
  });
}


// =====================================================
// 9. SEARCH
// =====================================================

if (searchInput) {
  searchInput.addEventListener("input", () => {
    renderTechnologyCards(searchInput.value);
  });
}


// =====================================================
// 10. MARK TOPICS COMPLETED
// =====================================================

if (roadmapStages) {
  roadmapStages.addEventListener("change", event => {
    const checkbox = event.target.closest("[data-topic-id]");

    if (!checkbox || !selectedRoadmapId) return;

    const progress = readProgress();

    if (!progress[selectedRoadmapId]) {
      progress[selectedRoadmapId] = {};
    }

    progress[selectedRoadmapId][checkbox.dataset.topicId] =
      checkbox.checked;

    saveProgress(progress);

    const roadmap = roadmaps.find(
      item => item.id === selectedRoadmapId
    );

    if (roadmap) {
      renderStages(roadmap);
    }
  });
}


// =====================================================
// 11. SAVE SELECTED TOPIC FOR NOTES/PRACTICE
// =====================================================

if (roadmapStages) {
  roadmapStages.addEventListener("click", event => {
    const link = event.target.closest("[data-action]");

    if (!link || !selectedRoadmapId) return;

    const roadmap = roadmaps.find(
      item => item.id === selectedRoadmapId
    );

    if (!roadmap) return;

    const topic = getAllTopics(roadmap).find(
      item => item.id === link.dataset.topicId
    );

    if (!topic) return;

    localStorage.setItem(
      "skillbridgeSelectedTechnology",
      roadmap.id
    );

    localStorage.setItem(
      "skillbridgeSelectedTopic",
      topic.id
    );

    localStorage.setItem(
      "skillbridgeSelectedTopicTitle",
      topic.title
    );
  });
}


// =====================================================
// 12. RESET ROADMAP PROGRESS
// =====================================================

if (resetProgressButton) {
  resetProgressButton.addEventListener("click", () => {
    if (!selectedRoadmapId) return;

    const shouldReset = window.confirm(
      "Reset all completed topics for this roadmap?"
    );

    if (!shouldReset) return;

    const progress = readProgress();

    delete progress[selectedRoadmapId];

    saveProgress(progress);

    const roadmap = roadmaps.find(
      item => item.id === selectedRoadmapId
    );

    if (roadmap) {
      renderStages(roadmap);
    }
  });
}


// =====================================================
// 13. INITIALIZE THE PAGE
// =====================================================

renderTechnologyCards();

const savedRoadmapId = localStorage.getItem(SELECTED_KEY);

if (roadmaps.some(item => item.id === savedRoadmapId)) {
  openRoadmap(savedRoadmapId, false);
}