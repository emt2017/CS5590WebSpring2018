function changeClass(){
    //initialize class names
    document.getElementById('GScourse').className = "show";
    document.getElementById('BScourse').className = "show";
    document.getElementById('fallCourseBS').className = "show";
    document.getElementById('summerCourseBS').className = "show";
    document.getElementById('springCourseBS').className = "show";
    document.getElementById('fallCourseGS').className = "show";
    document.getElementById('summerCourseGS').className = "show";
    document.getElementById('springCourseGS').className = "show";

    //Checks if BS(Bachelors) or GS(Graduate) is checked
    //if BS is checked hides all GS
    //if GS is checked hides all BS
    //inside that if function it checks which season is checked (Spring, Fall, or Summer), and hides
    //the seasons that are not checked
    //then it checks for which Career Options are checked
    //and shows or hides them accordingly
    if(document.getElementById('BS').checked){
        document.getElementById('GScourse').className = "hidden";
        if(document.getElementById('Spring').checked){
            document.getElementById('fallCourseBS').className = "hidden";
            document.getElementById('summerCourseBS').className = "hidden";
            if(document.getElementById('Engineering').checked){
                document.getElementById('springEngBS').className = "show";
            }
            else{
                document.getElementById('springEngBS').className = "hidden";
            }
            if(document.getElementById('Law').checked){
                document.getElementById('springLawBS').className = "show";
            }
            else{
                document.getElementById('springLawBS').className = "hidden";
            }
            if(document.getElementById('ComputerScience').checked){
                document.getElementById('springCSBS').className = "show";
            }
            else{
                document.getElementById('springCSBS').className = "hidden";
            }
        }
        else if(document.getElementById('Fall').checked){
            document.getElementById('springCourseBS').className = "hidden";
            document.getElementById('summerCourseBS').className = "hidden";
            if(document.getElementById('Engineering').checked){
                document.getElementById('fallEngBS').className = "show";
            }
            else{
                document.getElementById('fallEngBS').className = "hidden";
            }
            if(document.getElementById('Law').checked){
                document.getElementById('fallLawBS').className = "show";
            }
            else{
                document.getElementById('fallLawBS').className = "hidden";
            }
            if(document.getElementById('ComputerScience').checked){
                document.getElementById('fallCSBS').className = "show";
            }
            else{
                document.getElementById('fallCSBS').className = "hidden";
            }
        }
        else if(document.getElementById('Summer').checked){
            document.getElementById('fallCourseBS').className = "hidden";
            document.getElementById('springCourseBS').className = "hidden";
            if(document.getElementById('Engineering').checked){
                document.getElementById('summerEngBS').className = "show";
            }
            else{
                document.getElementById('summerEngBS').className = "hidden";
            }
            if(document.getElementById('Law').checked){
                document.getElementById('summerLawBS').className = "show";
            }
            else{
                document.getElementById('summerLawBS').className = "hidden";
            }
            if(document.getElementById('ComputerScience').checked){
                document.getElementById('summerCSBS').className = "show";
            }
            else{
                document.getElementById('summerCSBS').className = "hidden";
            }
        }
    }
    //exact copy of the BS, but changed to accommodate for the GS courses
    if(document.getElementById('GS').checked){
        document.getElementById('BScourse').className = "hidden";
        if(document.getElementById('Spring').checked){
            document.getElementById('fallCourseGS').className = "hidden";
            document.getElementById('summerCourseGS').className = "hidden";
            if(document.getElementById('Engineering').checked){
                document.getElementById('springEngGS').className = "show";
            }
            else{
                document.getElementById('springEngGS').className = "hidden";
            }
            if(document.getElementById('Law').checked){
                document.getElementById('springLawGS').className = "show";
            }
            else{
                document.getElementById('springLawGS').className = "hidden";
            }
            if(document.getElementById('ComputerScience').checked){
                document.getElementById('springCSGS').className = "show";
            }
            else{
                document.getElementById('springCSGS').className = "hidden";
            }
        }
        else if(document.getElementById('Fall').checked){
            document.getElementById('springCourseGS').className = "hidden";
            document.getElementById('summerCourseGS').className = "hidden";
            if(document.getElementById('Engineering').checked){
                document.getElementById('fallEngGS').className = "show";
            }
            else{
                document.getElementById('fallEngGS').className = "hidden";
            }
            if(document.getElementById('Law').checked){
                document.getElementById('fallLawGS').className = "show";
            }
            else{
                document.getElementById('fallLawGS').className = "hidden";
            }
            if(document.getElementById('ComputerScience').checked){
                document.getElementById('fallCSGS').className = "show";
            }
            else{
                document.getElementById('fallCSGS').className = "hidden";
            }
        }
        else if(document.getElementById('Summer').checked){
            document.getElementById('fallCourseGS').className = "hidden";
            document.getElementById('springCourseGS').className = "hidden";
            if(document.getElementById('Engineering').checked){
                document.getElementById('summerEngGS').className = "show";
            }
            else{
                document.getElementById('summerEngGS').className = "hidden";
            }
            if(document.getElementById('Law').checked){
                document.getElementById('summerLawGS').className = "show";
            }
            else{
                document.getElementById('summerLawGS').className = "hidden";
            }
            if(document.getElementById('ComputerScience').checked){
                document.getElementById('summerCSGS').className = "show";
            }
            else{
                document.getElementById('summerCSGS').className = "hidden";
            }
        }
    }
}

//Run the changeClass function when the page loads, so the default classes are shown
window.onload = function(){
    changeClass();
}

//https://www.edx.org/course/robotics-locomotion-engineering-pennx-robo4x
//https://www.edx.org/course/international-law-louvainx-louv5x-4
//https://www.edx.org/course/ap-computer-science-java-programming-purduex-cs180-3x-0