// Typing Intro
const typing = document.getElementById("typing");

const intro =
"Establishing secure connection...\nIdentity verified.\nNo mercy for vulnerabilities.";

let i = 0;

function type(){
  if(i < intro.length){
    typing.innerHTML += intro[i];
    i++;
    setTimeout(type,50);
  }
}
type();


// Terminal Command
const out = document.getElementById("out");
const cmd = document.getElementById("cmd");

cmd.addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    const v = cmd.value.toLowerCase().trim();

    out.innerHTML += `<div>root@tri:~$ ${v}</div>`;

    if(v === "help"){
      out.innerHTML += "<div>help | about | skills | contact | flag | clear</div>";
    }

    else if(v === "about"){
      location.href = "#about";
    }

    else if(v === "skills"){
      location.href = "#skills";
    }

    else if(v === "contact"){
      location.href = "#contact";
    }

    //  FLAG COMMAND
    else if(v === "flag"){
      setTimeout(()=>{
        out.innerHTML += `<div class="text-green-400">FLAG FOUND → JMK69{easy_hacker_h1h1}</div>`;
        scrollTerminal();
      },500);
    }

    else if(v === "clear"){
      out.innerHTML = "";
    }

    else{
      out.innerHTML += "<div>command not found</div>";
    }

    cmd.value = "";
    scrollTerminal();
    console.log("JMK69{console_hunter}");

  }
});

//_look}
// Auto Scroll Terminal
function scrollTerminal(){
  out.scrollTop = out.scrollHeight;
}
