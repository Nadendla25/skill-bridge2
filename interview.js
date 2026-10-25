
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  const el = {
    categoryCards: document.querySelectorAll(".category-card"),
    questionCount: $("questionCount"),
    bestScore: $("bestScore"),
    quizSection: $("quizSection"),
    quizTitle: $("quizTitle"),
    quizDescription: $("quizDescription"),
    questionCounter: $("questionCounter"),
    progressFill: $("progressFill"),
    questionTopic: $("questionTopic"),
    questionText: $("questionText"),
    optionsList: $("optionsList"),
    feedback: $("feedback"),
    feedbackTitle: $("feedbackTitle"),
    feedbackText: $("feedbackText"),
    checkButton: $("checkButton"),
    nextButton: $("nextButton"),
    questionCard: $("questionCard"),
    resultCard: $("resultCard"),
    resultTitle: $("resultTitle"),
    resultMessage: $("resultMessage"),
    finalScore: $("finalScore"),
    finalPercentage: $("finalPercentage"),
    reviewButton: $("reviewButton"),
    retryButton: $("retryButton"),
    reviewCard: $("reviewCard"),
    reviewList: $("reviewList"),
    closeReviewButton: $("closeReviewButton")
  };

  if (!el.optionsList || !el.questionText ||
      !el.checkButton || !el.nextButton) {
    console.error("Check the IDs in interview.html.");
    return;
  }

  // Each question: topic, type, question, options, correct index, explanation
  const questionBank = {
    Python: [
      ["Basics", "Theory", "Which Python type is mutable?", ["Tuple", "String", "List", "Integer"], 2, "Lists can be changed after creation."],
      ["Basics", "Theory", "Which keyword defines a function?", ["func", "def", "function", "method"], 1, "Python uses def to define functions."],
      ["Collections", "Theory", "Which collection stores unique values?", ["List", "Tuple", "Set", "String"], 2, "A set stores unique elements."],
      ["OOP", "Theory", "Which method initializes a Python object?", ["start()", "__init__()", "main()", "init()"], 1, "__init__ is commonly used to initialize instances."],
      ["Exceptions", "Theory", "Which block handles an exception?", ["try", "catch", "except", "final"], 2, "Python uses except to handle exceptions."],
      ["Output", "Coding", "What is the output of print(2 ** 3)?", ["5", "6", "8", "9"], 2, "** is the exponentiation operator."],
      ["Strings", "Coding", "What does print('Python'[::-1]) output?", ["Python", "nohtyP", "P", "Error"], 1, "A step of -1 reverses a sequence."],
      ["Lists", "Coding", "What is len([2, 4, 6, 8])?", ["3", "4", "8", "20"], 1, "There are four elements."],
      ["Loops", "Coding", "What does sum(range(1, 4)) return?", ["3", "6", "10", "4"], 1, "It calculates 1 + 2 + 3 = 6."],
      ["Conditions", "Coding", "What is printed by: x=5; print(x%2)?", ["0", "1", "2", "5"], 1, "The remainder after 5 is divided by 2 is 1."]
    ],

    C: [
      ["Basics", "Theory", "Which function is the usual entry point of a C program?", ["start()", "main()", "run()", "init()"], 1, "Execution normally begins in main()."],
      ["Types", "Theory", "Which format specifier is commonly used for int in printf?", ["%c", "%d", "%s", "%f"], 1, "%d prints an integer."],
      ["Pointers", "Theory", "What does a pointer store?", ["Only text", "A memory address", "A loop", "A keyword"], 1, "A pointer stores an address."],
      ["Memory", "Theory", "Which function releases dynamically allocated memory?", ["delete()", "remove()", "free()", "clear()"], 2, "free() releases allocated memory."],
      ["Preprocessor", "Theory", "Which symbol begins a preprocessor directive?", ["@", "#", "$", "&"], 1, "Directives such as #include start with #."],
      ["Output", "Coding", "What is printf(\"%d\", 3+4) output?", ["34", "7", "3+4", "Error"], 1, "The expression evaluates to 7."],
      ["Operators", "Coding", "What is 10 % 3 in C?", ["0", "1", "3", "3.33"], 1, "The remainder is 1."],
      ["Arrays", "Coding", "What is the first index of a C array?", ["0", "1", "-1", "Depends on size"], 0, "C arrays use zero-based indexing."],
      ["Loops", "Coding", "How many times does for(i=0;i<3;i++) run?", ["2", "3", "4", "0"], 1, "The values are 0, 1, and 2."],
      ["Conditions", "Coding", "What is printed by if(4>2) printf(\"Yes\");?", ["No", "Yes", "4", "Nothing"], 1, "The condition is true."]
    ],

    "C++": [
      ["OOP", "Theory", "Which feature allows one class to acquire another class's properties?", ["Inheritance", "Compilation", "Iteration", "Casting"], 0, "Inheritance enables reuse and extension of classes."],
      ["Functions", "Theory", "What is function overloading?", ["Same function name with different parameters", "Deleting a function", "Calling no functions", "Changing a variable"], 0, "Overloaded functions have different parameter lists."],
      ["Classes", "Theory", "Which access modifier is most restrictive among these?", ["public", "protected", "private", "global"], 2, "private members are accessible only within the class and its friends."],
      ["Memory", "Theory", "Which operator commonly allocates a single object dynamically?", ["malloc only", "new", "alloc", "create"], 1, "new allocates an object in C++."],
      ["Polymorphism", "Theory", "Which keyword supports overriding a virtual method?", ["virtual", "static", "friend", "extern"], 0, "virtual enables runtime polymorphism through base-class interfaces."],
      ["Output", "Coding", "What is cout << 2*5 output?", ["25", "10", "7", "Error"], 1, "2 multiplied by 5 is 10."],
      ["Vectors", "Coding", "What does vector<int> v={1,2,3}; v.size() return?", ["2", "3", "4", "1"], 1, "The vector contains three elements."],
      ["Operators", "Coding", "What is 7/2 with integer operands?", ["3.5", "3", "4", "2"], 1, "Integer division discards the fractional part."],
      ["Loops", "Coding", "How many times does for(int i=1;i<=4;i++) run?", ["3", "4", "5", "1"], 1, "It runs for i = 1, 2, 3, and 4."],
      ["Strings", "Coding", "What is string(\"Hi\").length()?", ["1", "2", "3", "0"], 1, "The string has two characters."]
    ],

    Java: [
      ["Basics", "Theory", "Which keyword defines a class in Java?", ["define", "class", "struct", "object"], 1, "Java uses class to declare a class."],
      ["JVM", "Theory", "What does JVM stand for?", ["Java Variable Method", "Java Virtual Machine", "Joint Virtual Module", "Java Verified Mode"], 1, "The JVM executes Java bytecode."],
      ["OOP", "Theory", "Which concept hides implementation details?", ["Abstraction", "Iteration", "Sorting", "Compilation"], 0, "Abstraction exposes essential behaviour while hiding details."],
      ["Exceptions", "Theory", "Which block handles exceptions?", ["catch", "final", "throws only", "import"], 0, "A catch block handles matching exceptions."],
      ["Collections", "Theory", "Which collection does not allow duplicate elements?", ["ArrayList", "List", "Set", "Queue"], 2, "A Set represents unique elements."],
      ["Output", "Coding", "What is the result of System.out.println(3+4)?", ["34", "7", "12", "Error"], 1, "The two integer values are added."],
      ["Strings", "Coding", "What is \"Java\".length()?", ["3", "4", "5", "0"], 1, "Java has four characters."],
      ["Operators", "Coding", "What is 9 % 4?", ["0", "1", "2", "3"], 3, "9 divided by 4 leaves remainder 1? Check: 9 = 4×2 + 1."],
      ["Arrays", "Coding", "What is the first index of a Java array?", ["0", "1", "-1", "Depends on size"], 0, "Java arrays use zero-based indexing."],
      ["Conditions", "Coding", "What is printed by if(2<3) System.out.print(\"A\");?", ["B", "A", "2", "Nothing"], 1, "The condition is true."]
    ],

    R: [
      ["Basics", "Theory", "Which symbol commonly assigns a value in R?", ["<-", "==", "!=", "&&"], 0, "<- is a common assignment operator."],
      ["Vectors", "Theory", "Which function creates a sequence of values?", ["seq()", "sort()", "plot()", "mean()"], 0, "seq() generates sequences."],
      ["Data Frames", "Theory", "What is a data frame?", ["A table-like structure", "A loop", "A file extension", "A function only"], 0, "A data frame stores tabular data in columns."],
      ["Statistics", "Theory", "Which function calculates an arithmetic mean?", ["median()", "mean()", "sum()", "range()"], 1, "mean() calculates the arithmetic mean."],
      ["Missing Values", "Theory", "Which value represents missing data in R?", ["NULL only", "NA", "FALSE", "0"], 1, "NA denotes a missing value."],
      ["Arithmetic", "Coding", "What is 2 + 3 in R?", ["23", "5", "6", "Error"], 1, "The result is 5."],
      ["Vectors", "Coding", "What is length(c(4,5,6))?", ["2", "3", "4", "15"], 1, "The vector has three elements."],
      ["Statistics", "Coding", "What is mean(c(2,4,6))?", ["3", "4", "6", "12"], 1, "The average is (2+4+6)/3 = 4."],
      ["Sequences", "Coding", "What does sum(1:3) return?", ["3", "6", "123", "1"], 1, "1 + 2 + 3 = 6."],
      ["Indexing", "Coding", "What is c(10,20,30)[2]?", ["10", "20", "30", "2"], 1, "R vector indexing starts at 1."]
    ],

    PHP: [
      ["Basics", "Theory", "Which symbol begins a PHP variable name?", ["#", "$", "@", "&"], 1, "PHP variables begin with $."],
      ["Syntax", "Theory", "Which tag commonly opens PHP code?", ["<php>", "<?php", "<script>", "<?"], 1, "<?php is the standard opening tag."],
      ["Functions", "Theory", "Which keyword declares a PHP function?", ["def", "func", "function", "method"], 2, "PHP uses function."],
      ["Arrays", "Theory", "Which array type uses named keys?", ["Associative array", "Only numeric array", "String array", "Loop array"], 0, "Associative arrays map keys to values."],
      ["Web", "Theory", "What is PHP commonly used for?", ["Server-side web development", "Only styling", "Only database storage", "Operating systems only"], 0, "PHP commonly generates server-side web content."],
      ["Output", "Coding", "What does echo 2+3; output?", ["23", "5", "2+3", "Error"], 1, "The arithmetic expression evaluates to 5."],
      ["Strings", "Coding", "What is strlen(\"Code\")?", ["3", "4", "5", "0"], 1, "Code contains four characters."],
      ["Arrays", "Coding", "What is count([2,4,6])?", ["2", "3", "6", "12"], 1, "The array has three elements."],
      ["Operators", "Coding", "What is 10 % 4?", ["0", "1", "2", "4"], 2, "The remainder is 2."],
      ["Conditions", "Coding", "What is printed by if(5>3) echo \"Yes\";?", ["No", "Yes", "5", "Nothing"], 1, "The condition is true."]
    ],

    HTML: [
      ["Elements", "Theory", "What is HTML used for?", ["Structuring web content", "Styling only", "Database queries", "Server hosting"], 0, "HTML structures the content of web pages."],
      ["Links", "Theory", "Which element creates a hyperlink?", ["<link>", "<a>", "<href>", "<url>"], 1, "The anchor element creates hyperlinks."],
      ["Images", "Theory", "Which attribute provides alternative image text?", ["title", "src", "alt", "class"], 2, "alt provides text alternatives for images."],
      ["Forms", "Theory", "Which element collects user input?", ["<form>", "<section>", "<span>", "<footer>"], 0, "Forms group controls used to submit user data."],
      ["Semantics", "Theory", "Which element represents a page's main content?", ["<aside>", "<main>", "<small>", "<label>"], 1, "main identifies the dominant page content."],
      ["Tags", "Coding", "Which tag creates the largest standard heading?", ["<h6>", "<head>", "<h1>", "<heading>"], 2, "h1 is the highest-level heading."],
      ["Lists", "Coding", "Which tag creates an ordered list?", ["<ul>", "<ol>", "<li>", "<dl>"], 1, "ol creates a numbered list."],
      ["Links", "Coding", "Which attribute specifies a link destination?", ["src", "href", "alt", "action"], 1, "href specifies the destination URL."],
      ["Tables", "Coding", "Which tag creates a table row?", ["<td>", "<th>", "<tr>", "<row>"], 2, "tr defines a table row."],
      ["Forms", "Coding", "Which input type hides typed characters?", ["text", "email", "password", "number"], 2, "password masks displayed input characters."]
    ],

    CSS: [
      ["Basics", "Theory", "What does CSS control?", ["Web page presentation", "Database records", "Server routes", "Python packages"], 0, "CSS styles the appearance and layout of HTML."],
      ["Selectors", "Theory", "Which selector targets an element by ID?", [".name", "#name", "*name", "name()"], 1, "The # selector targets an ID."],
      ["Box Model", "Theory", "Which property adds space inside an element's border?", ["margin", "padding", "outline", "gap only"], 1, "Padding is the space between content and border."],
      ["Layout", "Theory", "Which layout system is useful for one-dimensional alignment?", ["Flexbox", "SQL", "DOM", "JSON"], 0, "Flexbox is designed for one-dimensional layouts."],
      ["Responsive Design", "Theory", "What does a media query help create?", ["Responsive layouts", "Database indexes", "HTML forms", "Java classes"], 0, "Media queries apply styles based on conditions such as viewport width."],
      ["Selectors", "Coding", "Which CSS rule makes text red?", ["color: red;", "font: red;", "text: red;", "background: text;"], 0, "color controls text color."],
      ["Spacing", "Coding", "Which property adds outside space?", ["padding", "margin", "border", "color"], 1, "margin creates space outside an element's border."],
      ["Flexbox", "Coding", "Which declaration enables flex layout?", ["display: flex;", "position: flex;", "layout: flex;", "flex: display;"], 0, "display: flex enables Flexbox."],
      ["Borders", "Coding", "Which property rounds element corners?", ["corner", "border-radius", "round", "curve"], 1, "border-radius rounds corners."],
      ["Units", "Coding", "Which unit is relative to the root font size?", ["px", "rem", "cm", "pt"], 1, "rem is relative to the root element's font size."]
    ],

    JavaScript: [
      ["Basics", "Theory", "Which keyword declares a block-scoped variable that can be reassigned?", ["const", "let", "fixed", "static"], 1, "let declares a reassignable block-scoped variable."],
      ["Functions", "Theory", "What is an arrow function?", ["A function expression using =>", "An HTML element", "A CSS rule", "A database table"], 0, "Arrow functions use the => syntax."],
      ["DOM", "Theory", "What does the DOM represent?", ["A document object model", "A database query", "A CSS framework", "A compiler"], 0, "The DOM represents a document as objects."],
      ["Promises", "Theory", "What is a Promise used for?", ["Representing a future asynchronous result", "Styling text", "Declaring HTML", "Creating SQL tables"], 0, "Promises represent eventual completion or failure of asynchronous work."],
      ["Arrays", "Theory", "Which method creates a new array by transforming elements?", ["map()", "push()", "pop()", "alert()"], 0, "map() returns a transformed array."],
      ["Output", "Coding", "What is console.log(2 + 3) output?", ["23", "5", "6", "undefined"], 1, "The numbers are added."],
      ["Types", "Coding", "What does typeof 42 return?", ["number", "integer", "string", "object"], 0, "JavaScript reports numeric values as number."],
      ["Arrays", "Coding", "What is [1,2,3].length?", ["2", "3", "4", "6"], 1, "There are three array elements."],
      ["Strings", "Coding", "What does \"hello\".toUpperCase() return?", ["hello", "Hello", "HELLO", "Error"], 2, "toUpperCase() converts letters to uppercase."],
      ["Conditions", "Coding", "What is 5 === \"5\"?", ["true", "false", "5", "Error"], 1, "Strict equality compares both value and type."]
    ],

    "Data Analysis": [
      ["Basics", "Theory", "What is the main goal of data analysis?", ["Find useful insights from data", "Design logos", "Compile code", "Create operating systems"], 0, "Analysis helps answer questions and support decisions."],
      ["Cleaning", "Theory", "Why is data cleaning important?", ["To improve data quality", "To increase missing values", "To remove all columns", "To change every value randomly"], 0, "Cleaning addresses errors, duplicates and missing data."],
      ["Statistics", "Theory", "What does the median represent?", ["Middle value in ordered data", "Largest value", "Sum of values", "Number of columns"], 0, "The median is the middle ordered value."],
      ["Visualization", "Theory", "Which chart is useful for showing a trend over time?", ["Line chart", "Pie chart only", "Word cloud", "Network cable"], 0, "Line charts commonly show trends over time."],
      ["SQL", "Theory", "Why use GROUP BY in SQL?", ["Group rows for aggregation", "Delete a database", "Rename a server", "Encrypt a file"], 0, "GROUP BY groups records for aggregate calculations."],
      ["Python", "Coding", "What is sum([1,2,3])?", ["5", "6", "123", "3"], 1, "The sum is 6."],
      ["Statistics", "Coding", "What is the mean of 2, 4 and 6?", ["3", "4", "6", "12"], 1, "The mean is 12/3 = 4."],
      ["SQL", "Coding", "Which query counts rows in table employees?", ["SELECT COUNT(*) FROM employees;", "COUNT employees;", "SUM(*) employees;", "ROWS employees;"], 0, "COUNT(*) counts rows."],
      ["Cleaning", "Coding", "Which operation removes duplicate rows from a pandas DataFrame?", ["drop_duplicates()", "remove_all()", "delete_rows()", "unique_rows()"], 0, "drop_duplicates() removes duplicate records."],
      ["Pandas", "Coding", "What does df.head() show by default?", ["First five rows", "Last five rows", "Only column names", "All rows always"], 0, "head() displays the first five rows by default."]
    ],

    "Data Science": [
      ["Basics", "Theory", "What combines statistics, programming and domain knowledge to study data?", ["Data science", "HTML", "Networking only", "Word processing"], 0, "Data science uses these skills to extract insights."],
      ["Machine Learning", "Theory", "What is supervised learning?", ["Learning from labelled examples", "Learning without any data", "Only sorting files", "Manual coding of every answer"], 0, "Supervised models learn from input-output examples."],
      ["Statistics", "Theory", "What is overfitting?", ["Learning training data too closely and generalizing poorly", "Perfect performance on all unseen data", "Removing all features", "Increasing data quality automatically"], 0, "Overfit models often perform poorly on unseen data."],
      ["Evaluation", "Theory", "What is a test dataset used for?", ["Evaluating generalization on held-out data", "Training on every label", "Replacing the model", "Creating a database"], 0, "Test data estimates performance on unseen examples."],
      ["Features", "Theory", "What is a feature in a dataset?", ["An input variable", "Always the target label", "A programming language", "A chart title"], 0, "Features are input variables used by a model."],
      ["Python", "Coding", "What does len([5,6,7]) return?", ["2", "3", "18", "7"], 1, "The list contains three elements."],
      ["Statistics", "Coding", "What is the mean of [1,3,5]?", ["2", "3", "5", "9"], 1, "The average is 3."],
      ["Pandas", "Coding", "Which pandas command reads a CSV file?", ["pd.read_csv()", "pd.open_excel()", "pd.load_sql()", "pd.csv()"], 0, "read_csv() loads CSV data into a DataFrame."],
      ["Metrics", "Coding", "Accuracy is calculated as:", ["Correct predictions / total predictions", "False positives / all rows", "Features / labels", "Rows × columns"], 0, "Accuracy is the fraction of predictions that are correct."],
      ["Preprocessing", "Coding", "Which method commonly scales features to a standard mean and variance?", ["StandardScaler", "LabelEncoder only", "train_test_split", "LinearRegression"], 0, "StandardScaler standardizes features using training-set statistics."]
    ],

    "Business Analyst": [
      ["Requirements", "Theory", "What is a key responsibility of a business analyst?", ["Understand and document business needs", "Only repair hardware", "Write operating systems", "Manage electricity supply"], 0, "Business analysts connect business needs with solutions."],
      ["Stakeholders", "Theory", "Who is a stakeholder?", ["A person or group affected by a project", "Only the programmer", "Only the database", "A programming keyword"], 0, "Stakeholders influence or are affected by the project."],
      ["Documentation", "Theory", "What is a user story?", ["A short description of a user's need", "A database backup", "A coding error", "A server address"], 0, "User stories describe needs from the user's perspective."],
      ["Agile", "Theory", "What is a sprint in Scrum?", ["A fixed-length development iteration", "A database field", "A type of SQL query", "A network cable"], 0, "A sprint is a time-boxed work period."],
      ["Process", "Theory", "What does a flowchart represent?", ["Steps and decisions in a process", "Only financial totals", "A computer's memory", "A programming language"], 0, "Flowcharts visually represent processes."],
      ["Percentages", "Coding", "Sales rise from 100 to 120. What is the percentage increase?", ["10%", "20%", "25%", "120%"], 1, "Increase 20 divided by original 100 equals 20%."],
      ["Averages", "Coding", "What is the average of 10, 20 and 30?", ["10", "15", "20", "30"], 2, "Their sum is 60; divide by 3."],
      ["SQL", "Coding", "Which query selects all columns from customers?", ["SELECT * FROM customers;", "GET customers;", "SHOW ALL customers;", "SELECT customers;"], 0, "SELECT * returns all columns."],
      ["Prioritization", "Coding", "A task has high impact and low effort. How should it usually be treated?", ["High priority", "Never do it", "Always delay it", "Delete it"], 0, "High-impact, low-effort work is often a good priority."],
      ["KPIs", "Coding", "A KPI increases from 40 to 50. What is the percentage increase?", ["10%", "20%", "25%", "50%"], 2, "The increase is 10/40 × 100 = 25%."]
    ],

    AI: [
      ["Basics", "Theory", "What is Artificial Intelligence?", ["Systems performing tasks associated with intelligence", "Only a database", "A markup language", "A storage device"], 0, "AI covers systems that perform tasks such as reasoning and perception."],
      ["Search", "Theory", "What is a heuristic in AI search?", ["A rule or estimate guiding search", "A database password", "A CSS selector", "A hardware cable"], 0, "Heuristics help estimate which search path is promising."],
      ["Knowledge", "Theory", "What is knowledge representation?", ["Representing facts and relationships for reasoning", "Compressing every image", "Styling a page", "Creating a spreadsheet only"], 0, "Knowledge representation makes information usable for reasoning."],
      ["Agents", "Theory", "What does an intelligent agent do?", ["Perceives its environment and takes actions", "Only stores files", "Only formats text", "Always requires a human for every step"], 0, "Agents perceive conditions and act toward objectives."],
      ["Ethics", "Theory", "Why is AI bias important?", ["It can produce unfair outcomes", "It always improves accuracy", "It eliminates all errors", "It affects only hardware"], 0, "Biased data or design can lead to unfair results."],
      ["Python", "Coding", "What is max([3,9,5])?", ["3", "5", "9", "17"], 2, "max() returns the largest value."],
      ["Logic", "Coding", "If P is true and Q is false, what is P AND Q?", ["True", "False", "Unknown always", "P"], 1, "AND is true only when both inputs are true."],
      ["Logic", "Coding", "If P is true and Q is false, what is P OR Q?", ["True", "False", "Unknown always", "Q"], 0, "OR is true when at least one input is true."],
      ["Search", "Coding", "Which search method uses a queue and explores breadth first?", ["BFS", "DFS", "Binary search", "Bubble sort"], 0, "Breadth-first search typically uses a queue."],
      ["Probability", "Coding", "A fair coin has what probability of heads?", ["0", "1/4", "1/2", "1"], 2, "One of two equally likely outcomes is heads."]
    ],

    ML: [
      ["Basics", "Theory", "What is machine learning?", ["Learning patterns from data", "Only writing HTML", "Manual database entry", "A network cable"], 0, "ML algorithms learn patterns from examples."],
      ["Learning Types", "Theory", "Which learning type uses labelled examples?", ["Supervised", "Unsupervised", "Random", "Manual only"], 0, "Supervised learning uses labelled training data."],
      ["Clustering", "Theory", "Which task is commonly unsupervised?", ["Grouping customers without labels", "Predicting labelled classes", "Using a provided target", "Computing a known answer only"], 0, "Clustering can discover groups without labelled targets."],
      ["Overfitting", "Theory", "Which technique can help reduce overfitting?", ["Regularization", "Adding leakage", "Testing on training data only", "Removing validation"], 0, "Regularization penalizes excessive model complexity."],
      ["Evaluation", "Theory", "What is a confusion matrix used for?", ["Summarizing classification predictions", "Creating HTML pages", "Storing passwords", "Compiling Java"], 0, "It compares predicted and actual classes."],
      ["Python", "Coding", "What is sum([1,2,3])?", ["5", "6", "123", "3"], 1, "The result is 6."],
      ["Splitting", "Coding", "Why split data into training and test sets?", ["Evaluate on held-out examples", "Make all data labelled", "Guarantee 100% accuracy", "Remove the target"], 0, "Held-out data helps assess generalization."],
      ["Metrics", "Coding", "A model gets 80 of 100 predictions correct. What is accuracy?", ["20%", "50%", "80%", "100%"], 2, "80/100 × 100 = 80%."],
      ["Scaling", "Coding", "Which value is the mean of [2,4,6]?", ["2", "4", "6", "12"], 1, "The mean is 4."],
      ["Classification", "Coding", "Predicting spam versus not spam is usually:", ["Classification", "Clustering only", "Regression only", "Sorting"], 0, "Spam detection predicts discrete categories."]
    ],

    DL: [
      ["Neural Networks", "Theory", "What is a neural network inspired by?", ["Connected neurons in biological systems", "A spreadsheet", "A CSS grid", "A database key"], 0, "Artificial neural networks use interconnected computational units."],
      ["Layers", "Theory", "What is a hidden layer?", ["A layer between input and output", "The dataset file name", "A database table", "A hardware port"], 0, "Hidden layers transform representations between input and output."],
      ["Activation", "Theory", "Why use an activation function?", ["Introduce non-linearity", "Delete training data", "Format HTML", "Increase file size only"], 0, "Non-linear activations let networks model complex relationships."],
      ["Training", "Theory", "What does backpropagation calculate?", ["Gradients of the loss", "Only final predictions", "Database rows", "HTML tags"], 0, "Backpropagation computes gradients for model parameters."],
      ["CNN", "Theory", "CNNs are especially common in which task?", ["Image processing", "SQL joins only", "Text styling", "Operating system installation"], 0, "Convolutional networks are widely used for image data."],
      ["Python", "Coding", "What is 2 ** 4 in Python?", ["6", "8", "16", "24"], 2, "2 to the fourth power is 16."],
      ["Tensors", "Coding", "Which library is widely used for tensor-based deep learning?", ["PyTorch", "BeautifulSoup only", "Flask only", "Requests only"], 0, "PyTorch provides tensors and neural-network tools."],
      ["Loss", "Coding", "What does a loss value measure?", ["Prediction error according to a function", "Number of HTML tags", "File size only", "Network speed only"], 0, "Loss quantifies model error for optimization."],
      ["Training", "Coding", "If learning rate is extremely high, training may:", ["Become unstable", "Always become perfect", "Skip all parameters forever", "Turn into classification"], 0, "Large updates can overshoot useful parameter values."],
      ["Regularization", "Coding", "Which technique randomly disables some units during training?", ["Dropout", "Sorting", "Indexing", "Tokenization"], 0, "Dropout can reduce co-adaptation and overfitting."]
    ],

    "Gen AI": [
      ["Basics", "Theory", "What does generative AI do?", ["Creates new content from learned patterns", "Only sorts numbers", "Only stores tables", "Only styles text"], 0, "Generative AI can produce text, images, audio and other content."],
      ["LLMs", "Theory", "What is an LLM?", ["Large language model", "Local link manager", "Linear logic method", "Language layout module"], 0, "LLMs are trained to process and generate language."],
      ["Prompts", "Theory", "What is prompt engineering?", ["Designing instructions for a model", "Installing a GPU", "Creating SQL indexes", "Styling HTML"], 0, "Clear prompts can improve response relevance."],
      ["RAG", "Theory", "What does RAG combine?", ["Retrieval with generation", "Rendering and graphics", "Regression and grouping", "Routing and gaming"], 0, "RAG retrieves relevant information to ground generated responses."],
      ["Hallucinations", "Theory", "What is an AI hallucination?", ["Confident but unsupported or incorrect output", "A guaranteed correct answer", "A computer virus always", "A database index"], 0, "Generated text can sound convincing while being wrong."],
      ["Python", "Coding", "Which Python expression joins two strings a and b?", ["a + b", "a * b only", "a - b", "a / b"], 0, "The + operator concatenates strings."],
      ["Embeddings", "Coding", "What do embeddings represent?", ["Items as numerical vectors", "Only images as files", "HTML structure", "Database passwords"], 0, "Embeddings map content into vector representations."],
      ["Retrieval", "Coding", "Which similarity measure is often used with text embeddings?", ["Cosine similarity", "File size", "Pixel count only", "SQL COUNT only"], 0, "Cosine similarity compares vector directions."],
      ["Tokens", "Coding", "What is a token in language-model processing?", ["A unit of text representation", "Always one whole sentence", "A GPU core", "A database table"], 0, "Tokens may represent words, word parts or other text units."],
      ["Evaluation", "Coding", "Why evaluate generated answers against reliable sources?", ["To check factual accuracy and grounding", "To increase hallucinations", "To remove all context", "To guarantee every answer"], 0, "Evaluation helps identify unsupported or inaccurate output."]
    ],

    AWS: [
      ["Cloud", "Theory", "What is cloud computing?", ["On-demand computing resources over a network", "Only a programming language", "A local spreadsheet", "A CSS framework"], 0, "Cloud services provide computing resources on demand."],
      ["Compute", "Theory", "What is Amazon EC2?", ["Virtual server service", "Object storage only", "DNS domain only", "A database query"], 0, "EC2 provides resizable compute capacity."],
      ["Storage", "Theory", "What is Amazon S3 primarily used for?", ["Object storage", "Running CSS", "Writing Java only", "Managing keyboard input"], 0, "S3 stores objects in buckets."],
      ["Serverless", "Theory", "What is AWS Lambda?", ["A serverless compute service", "A physical router", "A spreadsheet", "A SQL keyword"], 0, "Lambda runs code in response to events without managing servers."],
      ["Security", "Theory", "What is IAM used for?", ["Managing identities and permissions", "Editing images", "Writing CSS", "Compressing code only"], 0, "IAM controls access to AWS resources."],
      ["Storage", "Coding", "Which S3 resource contains objects?", ["Bucket", "Subnet only", "Function only", "Role only"], 0, "S3 buckets contain stored objects."],
      ["Compute", "Coding", "Which AWS service is a common choice for a virtual Linux server?", ["EC2", "S3", "Route 53 only", "CloudFront only"], 0, "EC2 instances can run Linux servers."],
      ["Networking", "Coding", "Which AWS service provides managed DNS?", ["Route 53", "S3", "EBS only", "Lambda only"], 0, "Route 53 provides DNS and domain routing features."],
      ["Monitoring", "Coding", "Which service collects many AWS logs and metrics?", ["CloudWatch", "S3 only", "IAM only", "CodeCommit only"], 0, "CloudWatch monitors metrics, logs and alarms."],
      ["Database", "Coding", "Which AWS service provides managed relational databases?", ["RDS", "S3", "CloudFront", "Route 53"], 0, "RDS manages supported relational database engines."]
    ],

    Azure: [
      ["Cloud", "Theory", "What is Microsoft Azure?", ["A cloud computing platform", "A programming loop", "A CSS framework", "A local text file"], 0, "Azure provides cloud infrastructure and managed services."],
      ["Compute", "Theory", "What is an Azure Virtual Machine?", ["A virtualized computing server", "An image editor", "A spreadsheet", "A DNS record only"], 0, "Virtual Machines provide configurable compute instances."],
      ["Storage", "Theory", "What is Azure Blob Storage used for?", ["Object storage", "Running SQL queries only", "Designing websites", "Compiling Java"], 0, "Blob Storage stores unstructured object data."],
      ["Identity", "Theory", "Which service manages identities and access in Azure?", ["Microsoft Entra ID", "Azure Blob only", "Azure Files only", "Azure Monitor only"], 0, "Microsoft Entra ID provides identity and access capabilities."],
      ["Monitoring", "Theory", "What does Azure Monitor do?", ["Collects and analyzes monitoring data", "Creates HTML elements", "Compiles C code", "Stores only passwords"], 0, "Azure Monitor supports metrics, logs and alerts."],
      ["Compute", "Coding", "Which Azure service runs code without managing servers?", ["Azure Functions", "Azure Blob Storage", "Azure DNS only", "Azure Files"], 0, "Azure Functions is a serverless compute service."],
      ["Database", "Coding", "Which Azure service offers managed SQL databases?", ["Azure SQL Database", "Azure CDN", "Azure DNS", "Azure Monitor"], 0, "Azure SQL Database is a managed relational database service."],
      ["Networking", "Coding", "What does a Virtual Network provide?", ["Private network isolation in Azure", "Object storage", "Text generation only", "Source control only"], 0, "Virtual Networks enable private network communication."],
      ["Containers", "Coding", "Which Azure service can manage Kubernetes clusters?", ["Azure Kubernetes Service", "Azure Blob", "Azure DNS", "Azure Monitor"], 0, "AKS is Azure's managed Kubernetes service."],
      ["Security", "Coding", "Where can secrets and keys be securely stored in Azure?", ["Azure Key Vault", "Azure CDN", "Azure DNS", "Azure Monitor"], 0, "Key Vault manages secrets, keys and certificates."]
    ]
  };

  // Fix a deliberately simple question-bank validation issue:
  // Java integer remainder and JavaScript arithmetic question explanations
  // are displayed as authored; all correct indexes are zero-based.

  const technologies = Object.keys(questionBank);
  const BEST_KEY = "skillbridgeInterviewBestScores";

  let currentCategory = "Python";
  let questions = [];
  let currentIndex = 0;
  let selectedAnswer = null;
  let score = 0;
  let answered = false;
  let answerHistory = [];

  const categories = {
    Technical: ["Python", "C", "C++", "Java", "R", "PHP", "HTML", "CSS", "JavaScript", "Data Analysis", "Data Science", "Business Analyst", "AI", "ML", "DL", "Gen AI", "AWS", "Azure"],
    HR: [],
    Aptitude: []
  };

  function readScores() {
    try {
      return JSON.parse(localStorage.getItem(BEST_KEY)) || {};
    } catch {
      return {};
    }
  }

  function updateBestScore() {
    const scores = Object.values(readScores()).filter(Number.isFinite);
    el.bestScore.textContent = scores.length ? `${Math.max(...scores)}%` : "—";
  }

  function addTechnologySelector() {
    if (document.getElementById("technologySelector")) return;

    const selector = document.createElement("select");
    selector.id = "technologySelector";
    selector.setAttribute("aria-label", "Choose a technology");
    selector.style.cssText =
      "width:100%;max-width:360px;padding:12px;margin:12px 0;border-radius:10px;border:1px solid #ccc;font:inherit;";

    technologies.forEach((technology) => {
      const option = document.createElement("option");
      option.value = technology;
      option.textContent = technology;
      selector.appendChild(option);
    });

    selector.value = currentCategory;

    selector.addEventListener("change", () => startQuiz(selector.value));

    el.quizTitle?.parentElement?.insertBefore(
      selector,
      el.quizTitle
    );
  }

  function startQuiz(category) {
    if (!questionBank[category]) return;

    currentCategory = category;
    questions = questionBank[category].map((item) => ({
      topic: item[0],
      type: item[1],
      question: item[2],
      options: item[3],
      correct: item[4],
      explanation: item[5]
    }));

    currentIndex = 0;
    selectedAnswer = null;
    score = 0;
    answered = false;
    answerHistory = [];

    el.categoryCards.forEach((card) => {
      const active = card.dataset.category === category;
      card.classList.toggle("active", active);
      card.setAttribute("aria-pressed", String(active));
    });

    if (el.quizTitle) el.quizTitle.textContent = `${category} Interview Preparation`;
    if (el.quizDescription) {
      el.quizDescription.textContent =
        "Practise theory and coding MCQs. Select an answer to see its explanation.";
    }

    if (el.questionCard) el.questionCard.hidden = false;
    if (el.resultCard) el.resultCard.hidden = true;
    if (el.reviewCard) el.reviewCard.hidden = true;

    addTechnologySelector();

    const selector = document.getElementById("technologySelector");
    if (selector) selector.value = category;

    renderQuestion();
  }

  function renderQuestion() {
    const q = questions[currentIndex];

    selectedAnswer = null;
    answered = false;

    el.questionCounter.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    el.progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;
    el.questionTopic.textContent = `${q.topic} · ${q.type}`;
    el.questionText.textContent = q.question;
    el.optionsList.replaceChildren();

    q.options.forEach((text, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.setAttribute("aria-pressed", "false");

      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = String.fromCharCode(65 + index);

      const label = document.createElement("span");
      label.textContent = text;

      button.append(letter, label);

      button.addEventListener("click", () => {
        if (answered) return;

        selectedAnswer = index;

        el.optionsList.querySelectorAll(".option-button").forEach((b) => {
          b.classList.remove("selected");
          b.setAttribute("aria-pressed", "false");
        });

        button.classList.add("selected");
        button.setAttribute("aria-pressed", "true");
        el.checkButton.disabled = false;
      });

      el.optionsList.appendChild(button);
    });

    el.feedback.hidden = true;
    el.feedback.className = "feedback";
    el.checkButton.hidden = false;
    el.checkButton.disabled = true;
    el.nextButton.hidden = true;
  }

  function checkAnswer() {
    if (answered || selectedAnswer === null) return;

    answered = true;

    const q = questions[currentIndex];
    const correct = selectedAnswer === q.correct;

    if (correct) score++;

    answerHistory.push({
      ...q,
      selectedAnswer,
      isCorrect: correct
    });

    el.optionsList.querySelectorAll(".option-button").forEach((button, index) => {
      button.disabled = true;
      if (index === q.correct) button.classList.add("correct");
      if (index === selectedAnswer && !correct) button.classList.add("wrong");
    });

    el.feedback.hidden = false;
    el.feedback.className = correct
      ? "feedback correct-feedback"
      : "feedback wrong-feedback";

    el.feedbackTitle.textContent = correct
      ? "✓ Correct answer!"
      : "✗ Incorrect answer";

    el.feedbackText.textContent = q.explanation;
    el.checkButton.hidden = true;
    el.nextButton.hidden = false;
    el.nextButton.textContent =
      currentIndex === questions.length - 1 ? "View Results →" : "Next Question →";

    el.progressFill.style.width =
      `${((currentIndex + 1) / questions.length) * 100}%`;
  }

  function nextQuestion() {
    if (!answered) return;

    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    if (el.questionCard) el.questionCard.hidden = true;
    if (el.resultCard) el.resultCard.hidden = false;
    if (el.reviewCard) el.reviewCard.hidden = true;

    el.progressFill.style.width = "100%";
    el.questionCounter.textContent = "Session completed";
    el.finalScore.textContent = `${score}/${total}`;
    el.finalPercentage.textContent = `${percentage}%`;

    el.resultTitle.textContent =
      percentage >= 80 ? "Excellent work! 🎉" :
      percentage >= 50 ? "Good progress! 💪" :
      "Keep learning! 🌱";

    el.resultMessage.textContent =
      "Review the explanations for missed questions and practise again to improve.";

    const scores = readScores();
    scores[currentCategory] = Math.max(scores[currentCategory] || 0, percentage);

    try {
      localStorage.setItem(BEST_KEY, JSON.stringify(scores));
    } catch (error) {
      console.warn("Could not save best score.", error);
    }

    updateBestScore();
  }

  function showReview() {
    el.resultCard.hidden = true;
    el.questionCard.hidden = true;
    el.reviewCard.hidden = false;
    el.reviewList.replaceChildren();

    answerHistory.forEach((answer, index) => {
      const item = document.createElement("article");
      item.className = "review-item";

      const heading = document.createElement("h3");
      heading.textContent = `${index + 1}. ${answer.question}`;

      const topic = document.createElement("p");
      topic.textContent = `Topic: ${answer.topic} · ${answer.type}`;

      const yourAnswer = document.createElement("p");
      yourAnswer.textContent = `Your answer: ${answer.options[answer.selectedAnswer]}`;

      const correctAnswer = document.createElement("p");
      correctAnswer.textContent = `Correct answer: ${answer.options[answer.correct]}`;
      correctAnswer.className = "review-correct";

      const status = document.createElement("p");
      status.textContent = answer.isCorrect ? "✓ Correct" : "✗ Incorrect";
      status.className = answer.isCorrect ? "review-correct" : "review-wrong";

      const explanation = document.createElement("p");
      explanation.textContent = `Explanation: ${answer.explanation}`;

      item.append(heading, topic, yourAnswer, correctAnswer, status, explanation);
      el.reviewList.appendChild(item);
    });
  }

  el.categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;

      if (questionBank[category]) {
        startQuiz(category);
      } else {
        startQuiz("Python");
      }
    });
  });

  el.checkButton.addEventListener("click", checkAnswer);
  el.nextButton.addEventListener("click", nextQuestion);
  el.retryButton?.addEventListener("click", () => startQuiz(currentCategory));
  el.reviewButton?.addEventListener("click", showReview);

  el.closeReviewButton?.addEventListener("click", () => {
    el.reviewCard.hidden = true;
    el.resultCard.hidden = false;
  });

  el.questionCount.textContent = technologies.length * 10;
  updateBestScore();
  addTechnologySelector();
  startQuiz("Python");

  console.log("SkillBridge Interview Preparation loaded.");
});
