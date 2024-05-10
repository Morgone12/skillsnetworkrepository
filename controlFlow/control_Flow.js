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

//assesment
let userRole2 = prompt("Ingrese su rol en la empresa: Employee, Enrolled Member o Suscriber.");
let dietaryService;

switch(userRole2){
    case "Employee":
        dietaryService = "Access authorized to dietary services";
        break;
    case "Enrolled Member": 
        dietaryService = "Access authorized to dietary services and one-on-one interaction with a dietician";
        break;
    case "Suscriber":
        dietaryService = "Authorized to have a partial access to facilitate dietary services";
        break;
    default: 
    dietaryService = "Debes enrrolarte o al menos suscribirte primero para tener servicio dietario";
}
console.log(dietaryService);