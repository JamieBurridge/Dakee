const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Dakee API Docs",
      description: "Documentation for the Dakee API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], // Replace with the path to your API route files
};

export default swaggerOptions;
