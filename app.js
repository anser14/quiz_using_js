
      // window.onload(document.documentElement.requestFullscreen());
      document.getElementById("body").addEventListener("click", () => {
        document.documentElement.requestFullscreen();
      });
      let quiz = {
        "HTML Stands for": [
          "Hyper Text Markup Language",
          "browser language",
          "style sheet",
          "creativity",
          0,
        ],
        "css Stands for ": [
          "Hyper Text Markup Language",
          "Cascading Style Sheet",
          "styling area",
          "power setting",
          1,
        ],
        "JS Stands for": [
          "Hyper Text Markup Language",
          "style sheet",
          "browser language",
          "java script",
          3,
        ],
        "xml Stands for ": [
          "extended Markup Language",
          "Cascading Style Sheet",
          "styling area",
          "power setting",
          0,
        ],
      };
      let answers = [];
      let submit = document.getElementById("submit");
      let box = document.getElementById("box");
      let resultarea = document.getElementById("resultarea");
      let select = []; //document.getElementsByClassName("option");
      let qarea;
      let option;
      let div;
      let result = 0;
      let correct = 0;

      for (i of Object.keys(quiz)) {
        select.push(i.split(" ").join(""));
        div = document.createElement("div");
        qarea = document.createElement("h1");
        qarea.textContent = i;
        div.appendChild(qarea);
        box.appendChild(div);
        // console.log(quiz[i]);
        for (let j = 0; j < quiz[i].length; j++) {
          // console.log(quiz[i][j]);
          if (j === 4) {
            answers.push(quiz[i][j]);
          } else {
            option = document.createElement("p");
            option.innerHTML = `<input class="option" type="radio" name="${i
              .split(" ")
              .join("")}" value="${quiz[i][j]}">  ${quiz[i][j]}`;
            div.appendChild(option);
          }
        }
      }
      // console.log(answers);
      // console.log(select);
      submit.addEventListener("click", () => {
        let p = document.getElementsByTagName("p");
        for (p of p) {
          p.style.background = "transparent";
        }
        result = 0;
        for (let qn = 0; qn < select.length; qn++) {
          let radiobtn = document.getElementsByName(select[qn]);

          for (let i = 0; i < radiobtn.length; i++) {
            if (radiobtn[i].checked) {
              // console.log(i, answers[i]);

              // console.log(radiobtn[i], i);

              if (i === answers[qn]) {
                console.log("correct");
                result = result + 10;
                correct = correct + 1;
                resultarea.innerHTML = `${result} marks <br> with ${correct} correct Question out of ${
                  Object.keys(quiz).length
                } questions.`;
                radiobtn[i].parentElement.style.background = "green";
              } else {
                console.log("incorrect");
                radiobtn[i].parentElement.style.background = "red";
              }
            }
          }
        }
      });
    