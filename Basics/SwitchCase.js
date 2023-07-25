var user = 'testPrep';

switch (user) {
    case "admin":
        console.log("You get Full Access");
        break;
    case "subAdmin":
        console.log("You get create/delete Access");
        break;
    case "testPrep":
        console.log("Just fill out the test and check result");
        break;
    default:
        console.log("Trial Access");
}
