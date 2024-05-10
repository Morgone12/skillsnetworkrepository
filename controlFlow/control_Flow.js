let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access garanted";
}
else if (userRole === "manager"){
    accessLevel = "Limited access garanted";
}
else {
    accessLevel = "No access garanted";
}
console.log("Access Level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
if(userRole === "admin"){
    userMessage = "Welcome, Admin!";
}
else {
    userMessage = "Welcome, User";
}
} 
else {
    userMessage = "Pleas log in to access the system."
}
console.log("User Message:", userMessage);

let userType = "suscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Admin";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "suscriber":
        userCategory = "Suscriber";
        break;
    default: 
    userCategory = "Unknown";        
}
console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);