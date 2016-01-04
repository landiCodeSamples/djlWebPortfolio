/* 
 * Developed by David Landi 2016 all rights reserved
 * Utilizing module pattern for encapsulation
 * Utilizing Caching DOM selectors for perfomance
 * Purpose: Custom JS for webpage
 */
$( document ).ready(function() {
var NavBarEvent = (function(){
    /*
     * Purpose: Displays name of button that is clicked in the navbar.
     * Returns: Public Functions
     */
    var lnkHome = $(".home_link");
    var lnkSummary = $("#summary_link");
    var lnkExp = $("#experience_link");
    var lnkSkills = $("#skills_link");
    var lnkEdu = $("#education_link");
    var btnLanding = $('#btn_landing');
    var btnSummary = $('#btn_summary');
    var btnSkills = $('#btn_skills');
    var btnEducation = $('#btn_education');
    var btnExperience = $('#btn_experience');
    var btnMainExp = $('#btn_main_exp');
    var btnMainEdu = $('#btn_main_edu');
    var btnMainSkills = $('#btn_main_skills');
    var desc = $(".icon_desc");
    
    var onBtnLandingClick = function(name){
        btnLanding.click(function(){
            console.log("onBtnLandingClick");
            desc.text(name);
        });
    };
    var onBtnSummaryClick = function(name){
        btnSummary.click(function(){
            console.log("onBtnSummaryClick");
            desc.text(name);
        });
    };
    var onBtnSkillsClick = function(name){
        btnSkills.click(function(){
            console.log("onBtnSkillsClick");
            desc.text(name);
        });
    };
    var onBtnEducationClick = function(name){
        btnEducation.click(function(){
            console.log("onBtnEducationClick");
            desc.text(name);
        });
    };
    var onBtnExperienceClick = function(name){
        btnExperience.click(function(){
            console.log("onBtnExperienceClick");
            desc.text(name);
        });
    };
    
    var onLnkHomeClick = function(name){
        lnkHome.click(function(){
            console.log("onLnkHomeClick");
            desc.text(name);
        });
    };
    
    var onLnkSummaryClick = function(name){
        lnkSummary.click(function(){
            console.log("onLnkSummaryClick");
            desc.text(name);
        });
    };
    
    var onLnkExpClick = function(name){
        lnkExp.click(function(){
            console.log("onLnkExpClick");
            desc.text(name);
        });
    };
    
    var onLnkSkillsClick = function(name){
        lnkSkills.click(function(){
            console.log("onLnkSkillsClick");
            desc.text(name);
        });
    };
    
    var onLnkEduClick = function(name){
        lnkEdu.click(function(){
            console.log("onLnkEduClick");
            desc.text(name);
        });
    };
    
    return{
        onLnkHomeClick : onLnkHomeClick,
        onBtnSummaryClick : onBtnSummaryClick,
        onBtnSkillsClick : onBtnSkillsClick,
        onBtnEducationClick : onBtnEducationClick,
        onBtnExperienceClick : onBtnExperienceClick,
        onLnkSummaryClick : onLnkSummaryClick,
        onLnkExpClick : onLnkExpClick,
        onLnkSkillsClick : onLnkSkillsClick,
        onLnkEduClick : onLnkEduClick,
        onBtnLandingClick : onBtnLandingClick
    };
})();

var TextDisplayer = (function(){
    var btnProj = $('#btn_main_proj');
    var acpDom = $('#acp_desc');
    var bcpDom = $('#bcp_desc');
    
    var txtAcp = "I developed an application that would allow people to create \
        mobile-friendly web The idea was to give people an opportunity to \
        create a professional portfolio with little to no technical knowledge \
        or ability required.  I lead a team of two other classmates to develop \
        a SaaS-based web application that would allow an unlimited amount of \
        users to create their very own web portfolios.  I was responsible for \
        the majority of the HTML, JavaScript and CSS development.  I also \
        assisted with the PHP development that created functionality to \
        interact with the MySQL database. This application is not currently \
        hosted on a web server, but all all documentation and code can be \
        viewed on my GitHub account at \
        https://github.com/GetNoticedCapstone/getNOTICED\ ";
    
    var txtBcp = "In the Bachelor's degree program, we are required to develop \
        a final project over the span of 20 weeks.  The first 10 weeks are  \
        used for project planning and documentation.  This phase was completed \
        on 12/19/2015.  I developed the idea of creating a multiplayer game \
        that runs on a user’s web browser.  Currently, my team and I have a \
        hosted website that displays all of our documentation as well as \
        proofs of concept for chatroom functionality and a map feature that \
        allows users to add units by clicking on various map points.  I was \
        solely responsible for design and development of the proofs of concept.\
        I was solely responsible for the development and design of the website.\
        For the chatting functionality, I utilized PHP, JavaScript, and Ajax.  \
        I drew the base map by hand using Photoshop.  I used brush sets that \
        were free to use to create the castles and other landscape details.  \
        In order to accomplish user interaction with the map, I utilized \
        HTML5 canvas, CSS, and JavaScript. The final project will be completed \
        by March 19, 2016. The documentation and proof of concepts can be \
        viewed now at http://bloodlines.tk";
    
    var txtLsp = "In order to learn about HTML5 local storage I decided to \ \n\
        develope a crud application";
    
    var getTxtAcp = function(){
        return txtAcp;
    };
    
    var getTxtBcp = function(){
        return txtBcp;
    };
    
    var onBtnProjClick = function(){
        btnProj.click(function(){
            console.log("onBtnProjClick");
            acpDom.text(getTxtAcp);
            bcpDom.text(getTxtBcp);
        });
    };
    
    return{
        onBtnProjClick : onBtnProjClick
    };
})();

    NavBarEvent.onBtnLandingClick("Home");
    NavBarEvent.onBtnSummaryClick("Summary");
    NavBarEvent.onBtnExperienceClick("Experience");
    NavBarEvent.onBtnSkillsClick("Skills");
    NavBarEvent.onBtnEducationClick("Education");
    NavBarEvent.onLnkHomeClick("Home");
    NavBarEvent.onLnkSummaryClick("Summary");
    NavBarEvent.onLnkExpClick("Experience");
    NavBarEvent.onLnkSkillsClick("Skills");
    NavBarEvent.onLnkEduClick("Education");
    TextDisplayer.onBtnProjClick();
});

var GoogleGraphData = (function(){
    /*
     * Purpose: Displays graphs for skills
     * Returns: Public Functions
     */
    
    var codingLevelData = [
        ['Language', 'Level', {role:'style'}],
        ['PHP', 6, '#f1c40f'],
        ['Java', 7, '#2ecc71'],
        ['Python', 8, '#2ecc71'],
        ['C#', 5, '#f1c40f'],
        ['ASP.net', 5, '#f1c40f'],
        ['Javascript', 8, '#2ecc71'],
        ['HTML', 9, '#2ecc71'],
        ['CSS', 9, '#2ecc71'],
        ['AJAX', 3, '#bdc3c7'],
        ['SQL', 4, '#bdc3c7']
    ];
    var skillLevelData = [
        
        ['Skill', 'Level', {role:'style'}],
        ['Android Dev.', 5, '#f1c40f'],
        ['IOS Dev,', 2, '#bdc3c7'],
        ['Responsive Design', 8, '#2ecc71'],
        ['Object Oriented Design', 8, '#2ecc71'],
        ['Design Patterns', 7, '#2ecc71'],
        ['Web Services', 8, '#2ecc71'],
        ['Algorithims', 5, '#f1c40f']
    ];
    
    var langOptions = {
        title : "Programming Languages",
        bar: {groupWidth: "50%"},
        legend: { position: "none" }
    };
    
    var skillsOptions = {
        title : "Skills",
        bar: {groupWidth: "50%"},
        legend: { position: "none" }
    };
    
    var getSkillData = function(){
        console.log('sdfsdfsdf');
        return skillLevelData;
    };
    
    var getLangData = function(){
        return codingLevelData;
    };
    var getLangOptions = function(){
        return langOptions;
    };
    
    var getSkillsOptions = function(){
        return skillsOptions;
    };

    return{
        getLangOptions : getLangOptions(),
        getSkillsOptions : getSkillsOptions(),
        getSkillData : getSkillData(),
        getLangData : getLangData()
    };
    
})();
