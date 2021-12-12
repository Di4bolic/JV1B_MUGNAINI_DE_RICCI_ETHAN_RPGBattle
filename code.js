/* Importation des éléments du HTML */

attaque_basique = document.getElementById("attaque_basique");
attaque_speciale = document.getElementById("attaque_speciale");
bloquage = document.getElementById("bloquage");
enemy1 = document.getElementById("enemy1");
enemy2 = document.getElementById("enemy2");
enemy3 = document.getElementById("enemy3");
vie_e_1 = document.getElementById("vie_e_1");
vie_e_2 = document.getElementById("vie_e_2");
vie_e_3 = document.getElementById("vie_e_3");
box_a = document.getElementById("box_a");
hero1 = document.getElementById("hero1");
hero2 = document.getElementById("hero2");
hero3 = document.getElementById("hero3");
hero4 = document.getElementById("hero4");
vie_h_1 = document.getElementById("vie_h_1");
vie_h_2 = document.getElementById("vie_h_2");
vie_h_3 = document.getElementById("vie_h_3");
vie_h_4 = document.getElementById("vie_h_4");
mana_h_1 = document.getElementById("mana_h_1");
mana_h_2 = document.getElementById("mana_h_2");
mana_h_3 = document.getElementById("mana_h_3");
mana_h_4 = document.getElementById("mana_h_4");
dialogue = document.getElementById("dialogue");
barv1 = document.getElementById("barv1")
barv2 = document.getElementById("barv2")
barv3 = document.getElementById("barv3")
barv4 = document.getElementById("barv4")
barm1 = document.getElementById("barm1")
barm2 = document.getElementById("barm2")
barm3 = document.getElementById("barm3")
barm4 = document.getElementById("barm4")


/*--------------------------------------------------------------------------------------*/

/* Fonction sleep */

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

/*--------------------------------------------------------------------------------------*/

/* Info bulle de la vie des monstres */

enemy1.addEventListener('mouseenter' , () => vie_e_1.style.visibility = "visible");
enemy1.addEventListener('mouseleave' , () => vie_e_1.style.visibility = "hidden");

enemy2.addEventListener('mouseenter' , () => vie_e_2.style.visibility = "visible");
enemy2.addEventListener('mouseleave' , () => vie_e_2.style.visibility = "hidden");

enemy3.addEventListener('mouseenter' , () => vie_e_3.style.visibility = "visible");
enemy3.addEventListener('mouseleave' , () => vie_e_3.style.visibility = "hidden");

/*--------------------------------------------------------------------------------------*/

/* Variables */

var phase_attaque = false;
var tour = 1;
var e1 = false;
var e2 = false;
var e3 = false;
var h1 = false;
var h2 = false;
var h3 = false;
var h4 = false;
var vivant = [1,2,3,4];
var bloque1 = false;
var bloque2 = false;
var bloque3 = false;
var bloque4 = false;
var augmente = 0;
var atk1 = false;
var atk2 = false;
var atk3 = false;
var atk4 = false;
var blc1 = false;
var blc2 = false;
var blc3 = false;
var blc4 = false;
var ats1 = false;
var ats2 = false;
var ats3 = false;
var ats4 = false;

/*--------------------------------------------------------------------------------------*/

/* Griser les possibilités */
function griser(){
    if (tour == 1){
        if (atk1 == true){
            attaque_basique.addEventListener('mouseenter' , () => attaque_basique.style.color = "grey");
        } else {
            attaque_basique.style.color = "black";
            attaque_basique.addEventListener('mouseenter' , () => attaque_basique.style.color = "red");
            attaque_basique.addEventListener('mouseleave' , () => attaque_basique.style.color = "black");       
        }
        if (ats1 == true){
            attaque_speciale.addEventListener('mouseenter' , () => attaque_speciale.style.color = "grey");
        } else {
            attaque_speciale.style.color = "black";
            attaque_speciale.addEventListener('mouseenter' , () => attaque_speciale.style.color = "red");
            attaque_speciale.addEventListener('mouseleave' , () => attaque_speciale.style.color = "black"); 
        }
        if (blc1 == true){
            bloquage.addEventListener('mouseenter' , () => bloquage.style.color = "grey");
        } else {
            bloquage.style.color = "black";
            bloquage.addEventListener('mouseenter' , () => bloquage.style.color = "red");
            bloquage.addEventListener('mouseleave' , () => bloquage.style.color = "black"); 
        }
    }
    if (tour == 2){
        if (atk2 == true){
            attaque_basique.addEventListener('mouseenter' , () => attaque_basique.style.color = "grey");
        } else {
            attaque_basique.style.color = "black";  
            attaque_basique.addEventListener('mouseenter' , () => attaque_basique.style.color = "red");
            attaque_basique.addEventListener('mouseleave' , () => attaque_basique.style.color = "black");       
        }
        if (ats2 == true){
            attaque_speciale.addEventListener('mouseenter' , () => attaque_speciale.style.color = "grey");
        } else {
            attaque_speciale.style.color = "black";
            attaque_speciale.addEventListener('mouseenter' , () => attaque_speciale.style.color = "red");
            attaque_speciale.addEventListener('mouseleave' , () => attaque_speciale.style.color = "black"); 
        }
        if (blc2 == true){
            bloquage.addEventListener('mouseenter' , () => bloquage.style.color = "grey");
        } else {
            bloquage.style.color = "black";
            bloquage.addEventListener('mouseenter' , () => bloquage.style.color = "red");
            bloquage.addEventListener('mouseleave' , () => bloquage.style.color = "black"); 
        }
    }
    if (tour == 3){
        if (atk3 == true){
            attaque_basique.addEventListener('mouseenter' , () => attaque_basique.style.color = "grey");
        } else {
            attaque_basique.style.color = "black";     
            attaque_basique.addEventListener('mouseenter' , () => attaque_basique.style.color = "red");
            attaque_basique.addEventListener('mouseleave' , () => attaque_basique.style.color = "black");    
        }
        if (ats3 == true){
            attaque_speciale.addEventListener('mouseenter' , () => attaque_speciale.style.color = "grey");
        } else {
            attaque_speciale.style.color = "black";
            attaque_speciale.addEventListener('mouseenter' , () => attaque_speciale.style.color = "red");
            attaque_speciale.addEventListener('mouseleave' , () => attaque_speciale.style.color = "black"); 
        }
        if (blc3 == true){
            bloquage.addEventListener('mouseenter' , () => bloquage.style.color = "grey");
        } else {
            bloquage.style.color = "black";
            bloquage.addEventListener('mouseenter' , () => bloquage.style.color = "red");
            bloquage.addEventListener('mouseleave' , () => bloquage.style.color = "black"); 
        }
    }
    if (tour == 4){
        if (atk4 == true){
            attaque_basique.addEventListener('mouseenter' , () => attaque_basique.style.color = "grey");
        } else {
            attaque_basique.style.color = "black";      
            attaque_basique.addEventListener('mouseenter' , () => attaque_basique.style.color = "red");
            attaque_basique.addEventListener('mouseleave' , () => attaque_basique.style.color = "black");   
        }
        if (ats4 == true){
            attaque_speciale.addEventListener('mouseenter' , () => attaque_speciale.style.color = "grey");
        } else {
            attaque_speciale.style.color = "black";
            attaque_speciale.addEventListener('mouseenter' , () => attaque_speciale.style.color = "red");
            attaque_speciale.addEventListener('mouseleave' , () => attaque_speciale.style.color = "black"); 
        }
        if (blc4 == true){
            bloquage.addEventListener('mouseenter' , () => bloquage.style.color = "grey");
        } else {
            bloquage.style.color = "black";
            bloquage.addEventListener('mouseenter' , () => bloquage.style.color = "red");
            bloquage.addEventListener('mouseleave' , () => bloquage.style.color = "black"); 
        }
    }
}

/*--------------------------------------------------------------------------------------*/

/* Vérification de Victoire et défaite */

function winCheck() {
    if (vivant == "") {
        dialogue.innerHTML = "Aaaaaaaaaarghhh ...";
        sleep(1000).then(() => {
            document.open();
            document.write("<FONT SIZE=50>Dommage , vous avez perdu ...</FONT>");
            document.write("</br>");
            document.write("<FONT SIZE=50>Pour rejouer , relancez la page !</FONT>");
        })  
    }
    if (e1 == true) {
        if (e2 == true) {
            if (e3 == true) {
                dialogue.innerHTML = "Yaaaaaaaaa !";
                sleep(1000).then(() => {
                    document.open();
                    document.write("<FONT SIZE=50>Bien joué ! Vous avez triomphé !</FONT>");
                    document.write("</br>");
                    document.write("<FONT SIZE=50>Pour rejouer , relancez la page !</FONT>");
                })  
            }
        }
    }
}

/* Vérification de la mort de tout le monde */

function deathCheck() {
    barv1.value = vie_h_1
    barv2.value = vie_h_2
    barv3.value = vie_h_3
    barv4.value = vie_h_4
    barm1.value = mana_h_1
    barm2.value = mana_h_2
    barm3.value = mana_h_3
    barm4.value = mana_h_4
    if (vie_e_1.innerHTML <= 0) {
        enemy1.style.visibility = "hidden";
        vie_e_1.style.visibility = "hidden";
        e1 = true;
    }
    if (vie_e_2.innerHTML <= 0) {
        enemy2.style.visibility = "hidden";
        vie_e_2.style.visibility = "hidden";
        e2 = true;
    }
    if (vie_e_3.innerHTML <= 0) {
        vie_e_3.style.visibility = "hidden";
        enemy3.style.visibility = "hidden";
        e3 = true;
    }
    if (vie_h_1.innerHTML <= 0) {
        if (h1 == false) {
            hero1.style.visibility = "hidden";
            vie_h_1.innerHTML = 0;
            mana_h_1.innerHTML = 0;
            h1 = true;
            vivant.splice(vivant.indexOf(1), 1);            
        }
    }
    if (vie_h_2.innerHTML <= 0) {
        if (h2 == false) {
            hero2.style.visibility = "hidden";
            vie_h_2.innerHTML = 0;
            mana_h_2.innerHTML = 0;
            h2 = true;
            vivant.splice(vivant.indexOf(2), 1);
        }
    }
    if (vie_h_3.innerHTML <= 0) {
        if (h3 == false) {
            hero3.style.visibility = "hidden";
            vie_h_3.innerHTML = 0;
            mana_h_3.innerHTML = 0;
            h3 = true;
            vivant.splice(vivant.indexOf(3), 1);   
        }
    }
    if (vie_h_4.innerHTML <= 0) {
        if (h4 == false) {
            hero4.style.visibility = "hidden";
            vie_h_4.innerHTML = 0;
            mana_h_4.innerHTML = 0;
            h4 = true;
            vivant.splice(vivant.indexOf(4), 1);            
        }
    }
    
}

/*--------------------------------------------------------------------------------------*/

/* Bloquage */

function bloquer() {
    if (tour == 1) {
        hero1.src= "assets/angel_def.png";
        hero1.style.transform = "translate(75%, 60%)";
        bloque1= true
        sleep(500).then(() => {
            hero1.style.transform = "translate(75%, 50%)";
        })
        sleep(1000).then(() => {
            hero1.src= "assets/angel.png";
            if (h2 == false) {
                hero2.src= "assets/saint_bis.png";
            } else {
                if (h3 == false) {
                    hero3.src= "assets/samu_bis.png";
                } else {
                    if (h4 == false) {
                        hero4.src= "assets/hero_bis.png";
                    }
                }
            }
        })
    }
    if (tour == 2) {
        hero2.src= "assets/saint_def.png";
        hero2.style.transform = "translate(-90%, 150%)";
        bloque2= true
        sleep(500).then(() => {
            hero2.style.transform = "translate(-90%, 140%)";
        })
        sleep(1000).then(() => {
            hero2.src= "assets/saint.png";
            if (h3 == false) {
                hero3.src= "assets/samu_bis.png";
            } else {
                if (h4 == false) {
                    hero4.src= "assets/hero_bis.png";
                }
            }
        })
    }
    if (tour == 3) {
        hero3.src= "assets/samu_def.png";
        hero3.style.transform = "translate(50%, 80%)";
        bloque3= true
        sleep(500).then(() => {
            hero3.style.transform = "translate(50%, 70%)";
        })
        sleep(1000).then(() => {
            hero3.src= "assets/samu.png";
            if (h4 == false) {
                hero4.src= "assets/hero_bis.png";
            }
        })
    }
    if (tour == 4) {
        hero4.src= "assets/Spirit_def.png";
        hero4.style.transform = "translate(200%, 110%)";
        bloque4= true
        sleep(500).then(() => {
            hero4.style.transform = "translate(200%, 100%)";
        })
        sleep(1000).then(() => {
            hero4.src= "assets/Spirit.png";
        })
    } else {
        sleep(1100).then(() => {
            if (h4 == true) {
                if (tour == 4) {
                    tour = 5;
                    atkMonstres();
                } else {
                    box_a.style.visibility = "visible";
                    griser();
                }
            } else {
                box_a.style.visibility = "visible";
                griser();
            }
        })
    }
}

/*--------------------------------------------------------------------------------------*/

/* Animation des héros */

function showImage() {
    if (tour == 1) {
        hero1.style.transform = "translate(50%, 50%)";
        sleep(500).then(() => {
            hero1.style.transform = "translate(75%, 50%)";
        })
        sleep(1000).then(() => {
            hero1.src= "assets/angel.png";
            if (h2 == false) {
                hero2.src= "assets/saint_bis.png";
            } else {
                if (h3 == false) {
                    hero3.src= "assets/samu_bis.png";
                } else {
                    if (h4 == false) {
                        hero4.src= "assets/hero_bis.png";
                    }
                }
            }
        })
    }
    if (tour == 2) {
        hero2.style.transform = "translate(-150%, 140%)";
        sleep(500).then(() => {
            hero2.style.transform = "translate(-90%, 140%)";
        })
        sleep(1000).then(() => {
            hero2.src= "assets/saint.png";
            if (h3 == false) {
                hero3.src= "assets/samu_bis.png";
            } else {
                if (h4 == false) {
                    hero4.src= "assets/hero_bis.png";
                }
            }
        })
    }
    if (tour == 3) {
        hero3.style.transform = "translate(10%, 70%)";
        sleep(500).then(() => {
            hero3.style.transform = "translate(50%, 70%)";
        })
        sleep(1000).then(() => {
            hero3.src= "assets/samu.png";
            if (h4 == false) {
                hero4.src= "assets/hero_bis.png";
            }
        })
    }
    if (tour == 4) {
        hero4.style.transform = "translate(150%, 100%)";
        sleep(500).then(() => {
            hero4.style.transform = "translate(200%, 100%)";
        })
        sleep(1000).then(() => {
            hero4.src= "assets/Spirit.png";
        })
    } else {
        sleep(1100).then(() => {
            if (h4 == true) {
                if (tour == 4) {
                    tour = 5;
                    atkMonstres();
                } else {
                    box_a.style.visibility = "visible";
                    griser();
                }
            } else {
                box_a.style.visibility = "visible";
                griser();
            }
        })
    }
}

/*--------------------------------------------------------------------------------------*/

/* Attaque des monstres */

function atkMonstres() {
    if (tour == 5) {
        box_a.style.visibility = "hidden";
        /* MONSTRE 1 */
        if (e2 == false) {
            sleep(1500).then(() => {
                enemy2.style.transform = "translate(-40%, 80%)";
                var damage = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
                if (h1 == false) {
                    if (bloque1 == false) {
                        vie_h_1.innerHTML = vie_h_1.innerHTML - damage;
                        hero1.src = "assets/angel_1.png"
                        sleep(100).then(() => {
                            hero1.src = "assets/angel_2.png"
                        })
                        sleep(200).then(() => {
                            hero1.src = "assets/angel_3.png"
                        })
                        sleep(300).then(() => {
                            hero1.src = "assets/angel_4.png"
                        })
                        sleep(400).then(() => {
                            hero1.src = "assets/angel.png"
                        })
                    }
                }
                if (h2 == false) {
                    if (bloque2 == false) {
                        vie_h_2.innerHTML = vie_h_2.innerHTML - damage;          
                        hero2.src = "assets/saint_1.png"
                        sleep(100).then(() => {
                            hero2.src = "assets/saint_2.png"
                        })
                        sleep(200).then(() => {
                            hero2.src = "assets/saint_3.png"
                        })
                        sleep(300).then(() => {
                            hero2.src = "assets/saint_4.png"
                        })
                        sleep(400).then(() => {
                            hero2.src = "assets/saint.png"
                        })          
                    }
                }
                if (h3 == false) {
                    if (bloque3 == false) {
                        vie_h_3.innerHTML = vie_h_3.innerHTML - damage;
                        hero3.src = "assets/samu_1.png"
                        sleep(100).then(() => {
                            hero3.src = "assets/samu_2.png"
                        })
                        sleep(200).then(() => {
                            hero3.src = "assets/samu_3.png"
                        })
                        sleep(300).then(() => {
                            hero3.src = "assets/samu_4.png"
                        })
                        sleep(400).then(() => {
                            hero3.src = "assets/samu.png"
                        })                                                    
                    }
                }
                if (h4 == false) {
                    if (bloque4 == false) {
                        vie_h_4.innerHTML = vie_h_4.innerHTML - damage;          
                        hero4.src = "assets/Spirit_1.png"
                        sleep(100).then(() => {
                            hero4.src = "assets/Spirit_2.png"
                        })
                        sleep(200).then(() => {
                            hero4.src = "assets/Spirit_3.png"
                        })
                        sleep(300).then(() => {
                            hero4.src = "assets/Spirit_4.png"
                        })
                        sleep(400).then(() => {
                            hero4.src = "assets/Spirit.png"
                        })                     
                    }
                }
                dialogue.innerHTML = "La Faucheuse inflige " + damage + " dégâts à tout le monde ( sauf à ceux qui bloquent )";
                deathCheck();
                winCheck();
            })
            sleep(2000).then(() => {
                enemy2.style.transform = "translate(-80%, 80%)";
            })
        }
        /*--------------------------------------------------------------------------------------*/
        /* MONSTRE 2 */
        if (e3 == false) {
            sleep(3000).then(() => {
                enemy3.style.transform = "translate(50%, 10%)";
                var place = Math.floor(Math.random() * (vivant.length - 1 + 1)) + 1;
                var alea = vivant[place-1];
                var damage = Math.floor(Math.random() * (35 - 25 + 1)) + 25;
                if (alea == 1) {
                    if (bloque1 == false) {
                        vie_h_1.innerHTML = vie_h_1.innerHTML - damage;
                        dialogue.innerHTML = "La Brute inflige " + damage + " dégâts au Healer";
                        hero1.src = "assets/angel_1.png"
                        sleep(100).then(() => {
                            hero1.src = "assets/angel_2.png"
                        })
                        sleep(200).then(() => {
                            hero1.src = "assets/angel_3.png"
                        })
                        sleep(300).then(() => {
                            hero1.src = "assets/angel_4.png"
                        })
                        sleep(400).then(() => {
                            hero1.src = "assets/angel.png"
                        })
                    } else {
                        dialogue.innerHTML = "Healer bloque !";
                    }
                }
                if (alea == 2) {
                    if (bloque2 == false) {
                        vie_h_2.innerHTML = vie_h_2.innerHTML - damage;
                        dialogue.innerHTML = "La Brute inflige " + damage + " dégâts à l'Augmenteur";
                        hero2.src = "assets/saint_1.png"
                        sleep(100).then(() => {
                            hero2.src = "assets/saint_2.png"
                        })
                        sleep(200).then(() => {
                            hero2.src = "assets/saint_3.png"
                        })
                        sleep(300).then(() => {
                            hero2.src = "assets/saint_4.png"
                        })
                        sleep(400).then(() => {
                            hero2.src = "assets/saint.png"
                        })          
                    } else {
                        dialogue.innerHTML = "Augmenteur bloque !";
                    }                    
                }
                if (alea == 3) {
                    if (bloque3 == false) {
                        vie_h_3.innerHTML = vie_h_3.innerHTML - damage;
                        dialogue.innerHTML = "La Brute inflige " + damage + " dégâts au Finisher";
                        hero3.src = "assets/samu_1.png"
                        sleep(100).then(() => {
                            hero3.src = "assets/samu_2.png"
                        })
                        sleep(200).then(() => {
                            hero3.src = "assets/samu_3.png"
                        })
                        sleep(300).then(() => {
                            hero3.src = "assets/samu_4.png"
                        })
                        sleep(400).then(() => {
                            hero3.src = "assets/samu.png"
                        })             
                    } else {
                        dialogue.innerHTML = "Finisher bloque !";
                    }           
                }
                if (alea == 4) {
                    if (bloque4 == false) {
                        vie_h_4.innerHTML = vie_h_4.innerHTML - damage;
                        dialogue.innerHTML = "La Brute inflige " + damage + " dégâts au Dps";
                        hero4.src = "assets/Spirit_1.png"
                        sleep(100).then(() => {
                            hero4.src = "assets/Spirit_2.png"
                        })
                        sleep(200).then(() => {
                            hero4.src = "assets/Spirit_3.png"
                        })
                        sleep(300).then(() => {
                            hero4.src = "assets/Spirit_4.png"
                        })
                        sleep(400).then(() => {
                            hero4.src = "assets/Spirit.png"
                        })                     
                    } else {
                        dialogue.innerHTML = "Dps bloque !";
                    }
                }
                deathCheck();
                winCheck();
            })
            sleep(3500).then(() => {
                enemy3.style.transform = "translate(30%, 10%)";
            })
        }
        /*--------------------------------------------------------------------------------------*/
        /* MONSTRE 3 */
        if (e1 == false) {
            sleep(4500).then(() => {
                enemy1.style.transform = "translate(-200%, -140%)";
                var place = Math.floor(Math.random() * (vivant.length - 1 + 1)) + 1;
                var alea = vivant[place-1];
                var damage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
                if (alea == 1) {
                    if (bloque1 == false) {
                        vie_h_1.innerHTML = vie_h_1.innerHTML - damage;
                        dialogue.innerHTML = "Le Serviteur inflige " + damage + " dégâts au Healer";
                        hero1.src = "assets/angel_1.png"
                        sleep(100).then(() => {
                            hero1.src = "assets/angel_2.png"
                        })
                        sleep(200).then(() => {
                            hero1.src = "assets/angel_3.png"
                        })
                        sleep(300).then(() => {
                            hero1.src = "assets/angel_4.png"
                        })
                        sleep(400).then(() => {
                            hero1.src = "assets/angel.png"
                        })
                    } else {
                        dialogue.innerHTML = "Healer bloque !";
                    }                    
                }
                if (alea == 2) {
                    if (bloque2 == false) {
                        vie_h_2.innerHTML = vie_h_2.innerHTML - damage;
                        dialogue.innerHTML = "Le Serviteur inflige " + damage + " dégâts à l'Augmenteur";
                        hero2.src = "assets/saint_1.png"
                        sleep(100).then(() => {
                            hero2.src = "assets/saint_2.png"
                        })
                        sleep(200).then(() => {
                            hero2.src = "assets/saint_3.png"
                        })
                        sleep(300).then(() => {
                            hero2.src = "assets/saint_4.png"
                        })
                        sleep(400).then(() => {
                            hero2.src = "assets/saint.png"
                        })          
                    } else {
                        dialogue.innerHTML = "Augmenteur bloque !";
                    }                    
                }
                if (alea == 3) {
                    if (bloque3 == false) {
                        vie_h_3.innerHTML = vie_h_3.innerHTML - damage;
                        dialogue.innerHTML = "Le Serviteur inflige " + damage + " dégâts au Finisher";
                        hero3.src = "assets/samu_1.png"
                        sleep(100).then(() => {
                            hero3.src = "assets/samu_2.png"
                        })
                        sleep(200).then(() => {
                            hero3.src = "assets/samu_3.png"
                        })
                        sleep(300).then(() => {
                            hero3.src = "assets/samu_4.png"
                        })
                        sleep(400).then(() => {
                            hero3.src = "assets/samu.png"
                        })             
                    } else {
                        dialogue.innerHTML = "Finisher bloque !";
                    }                    
                }
                if (alea == 4) {
                    if (bloque4 == false) {
                        vie_h_4.innerHTML = vie_h_4.innerHTML - damage;
                        dialogue.innerHTML = "Le Serviteur inflige " + damage + " dégâts au Dps";
                        hero4.src = "assets/Spirit_1.png"
                        sleep(100).then(() => {
                            hero4.src = "assets/Spirit_2.png"
                        })
                        sleep(200).then(() => {
                            hero4.src = "assets/Spirit_3.png"
                        })
                        sleep(300).then(() => {
                            hero4.src = "assets/Spirit_4.png"
                        })
                        sleep(400).then(() => {
                            hero4.src = "assets/Spirit.png"
                        })                     
                    } else {
                        dialogue.innerHTML = "Dps bloque !";
                    }                    
                }
                deathCheck();
                winCheck();
            })
            sleep(5000).then(() => {
                enemy1.style.transform = "translate(-250%, -140%)";
            })
        }
        /*--------------------------------------------------------------------------------------*/
        sleep(6000).then(() => {
            bloque1 = false;
            bloque2 = false;
            bloque3 = false;
            bloque4 = false;
            if (h1 == false) {
                hero1.src= "assets/angel_bis.png";
                tour = 1;
                box_a.style.visibility = "visible";
                griser();
            } else {
                if (h2 == false) {
                    hero2.src= "assets/saint_bis.png";
                    tour = 2;
                    box_a.style.visibility = "visible";
                    griser();
                } else {
                    if (h3 == false) {
                        hero3.src= "assets/samu_bis.png";
                        tour = 3;
                        box_a.style.visibility = "visible";
                        griser();
                    } else {
                        if (h4 == false) {
                            hero4.src= "assets/hero_bis.png";
                            tour = 4;
                            box_a.style.visibility = "visible";
                            griser();
                        } else {
                            box_a.style.visibility = "hidden";
                        }
                    }
                }
            }
        })
        sleep(6000).then(() => {
            if (h1 == false) {
                if (mana_h_1.innerHTML <= 50) {
                    mana_h_1.innerHTML = parseInt(mana_h_1.innerHTML) + 50;
                }
            }
            if (h2 == false) {
                if (mana_h_2.innerHTML <= 100) {
                    mana_h_2.innerHTML = parseInt(mana_h_2.innerHTML) + 50;
                }
            }
            if (h3 == false) {
                if (mana_h_3.innerHTML <= 150) {
                    mana_h_3.innerHTML = parseInt(mana_h_3.innerHTML) + 50;
                }
            }
            if (h4 == false) {
                if (mana_h_4.innerHTML <= 50) {
                    mana_h_4.innerHTML = parseInt(mana_h_4.innerHTML) + 50;
                }
            }
        })
    }

}

/*--------------------------------------------------------------------------------------*/

/* Clic sur attaque basique */
  
attaque_basique.onclick = function(){
    if (tour == 1) {
        if (h1 == false) {
            if (atk1 == false) {
                ats1 = false
                atk1 = true
                blc1 = false
                phase_attaque = true;
                box_a.style.visibility = "hidden";
            }
        } else {
            tour = tour + 1;
        }
    }
    if (tour == 2) {
        augmente = 0
        if (h2 == false) {
            if (atk2 == false) {
                ats2 = false
                atk2 = true
                blc2 = false
                phase_attaque = true;
                box_a.style.visibility = "hidden";
            }
        } else {
            tour = tour +1;
        }
    }
    if (tour == 3) {
        if (h3 == false) {
            if (atk3 == false) {
                ats3 = false
                atk3 = true
                blc3 = false
                phase_attaque = true;
                box_a.style.visibility = "hidden";
            }
        } else {
            tour = tour + 1;
        }
    }
    if (tour == 4) {
        if (h4 == false) {
            if (atk4 == false) {
                ats4 = false
                atk4 = true
                blc4 = false
                phase_attaque = true;
                box_a.style.visibility = "hidden";
            }
        } else {
            tour = tour + 1;
            atkMonstres();
        }
    }
}

/*--------------------------------------------------------------------------------------*/

/* Selection des monstres pour attaque basique */

enemy1.onclick = function(){
    if (phase_attaque == true) {
        phase_attaque = false;
        enemy1.src = "assets/enemy1_1.png"
        sleep(100).then(() => {
            enemy1.src = "assets/enemy1_2.png"
        })
        sleep(200).then(() => {
            enemy1.src = "assets/enemy1_3.png"
        })
        sleep(300).then(() => {
            enemy1.src = "assets/enemy1_4.png"
        })
        sleep(400).then(() => {
            enemy1.src = "assets/enemy1.png"
        })
        if (tour == 1) {
            var damage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            damage = damage + augmente
            dialogue.innerHTML = "Le Healer inflige " + damage + " dégâts au Serviteur";
        }
        if (tour == 2) {
            var damage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
            damage = damage + augmente
            dialogue.innerHTML = "L'Augmenteur inflige " + damage + " dégâts au Serviteur";
        }
        if (tour == 3) {
            var damage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
            damage = damage + augmente
            dialogue.innerHTML = "Le Finisher inflige " + damage + " au Serviteur";
        }
        if (tour == 4) {
            var damage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
            damage = damage + augmente
            dialogue.innerHTML = "Le Dps inflige " + damage + " au Serviteur";
        }
        vie_e_1.innerHTML = vie_e_1.innerHTML - damage;
        deathCheck();
        winCheck();
        showImage();
        tour = tour + 1;
        atkMonstres();
    }
}

enemy2.onclick = function(){
    if (phase_attaque == true) {
        phase_attaque = false;
        enemy2.src = "assets/enemy2_1.png"
        sleep(100).then(() => {
            enemy2.src = "assets/enemy2_2.png"
        })
        sleep(200).then(() => {
            enemy2.src = "assets/enemy2_3.png"
        })
        sleep(300).then(() => {
            enemy2.src = "assets/enemy2_4.png"
        })
        sleep(400).then(() => {
            enemy2.src = "assets/enemy2.png"
        })
        if (tour == 1) {
            var damage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            damage = damage + augmente
            dialogue.innerHTML = "Le Healer inflige " + damage + " dégâts à la Faucheuse";
        }
        if (tour == 2) {
            var damage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
            damage = damage + augmente
            dialogue.innerHTML = "L'Augmenteur inflige " + damage + " dégâts à la Faucheuse";
        }
        if (tour == 3) {
            var damage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
            damage = damage + augmente
            dialogue.innerHTML = "Le Finisher inflige " + damage + " dégâts à la Faucheuse";
        }
        if (tour == 4) {
            var damage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
            damage = damage + augmente
            dialogue.innerHTML = "Le Dps inflige " + damage + " dégâts à la Faucheuse";
        }
        vie_e_2.innerHTML = vie_e_2.innerHTML - damage;
        deathCheck();
        winCheck();
        showImage();
        tour = tour + 1;
        atkMonstres();
    }
}

enemy3.onclick = function(){
    if (phase_attaque == true) {
        phase_attaque = false;
        enemy3.src = "assets/enemy3_1.png"
        sleep(100).then(() => {
            enemy3.src = "assets/enemy3_2.png"
        })
        sleep(200).then(() => {
            enemy3.src = "assets/enemy3_3.png"
        })
        sleep(300).then(() => {
            enemy3.src = "assets/enemy3_4.png"
        })
        sleep(400).then(() => {
            enemy3.src = "assets/enemy3.png"
        })
        if (tour == 1) {
            var damage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            damage = damage + augmente
            dialogue.innerHTML = "Le Healer inflige " + damage + " dégâts à la Brute";
        }
        if (tour == 2) {
            var damage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
            damage = damage + augmente
            dialogue.innerHTML = "L'Augmenteur inflige " + damage + " dégâts à la Brute";
        }
        if (tour == 3) {
            var damage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
            damage = damage + augmente
            dialogue.innerHTML = "Le Finisher inflige " + damage + " dégâts à la Brute";
        }
        if (tour == 4) {
            var damage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
            damage = damage + augmente
            dialogue.innerHTML = "Le Dps inflige " + damage + " dégâts à la Brute";
        }
        vie_e_3.innerHTML = vie_e_3.innerHTML - damage;
        deathCheck();
        winCheck();
        showImage();
        tour = tour + 1;
        atkMonstres();
    }
}

/*--------------------------------------------------------------------------------------*/

/* Clic sur bloquage */
  
bloquage.onclick = function(){
    if (tour == 1) {
        if (h1 == false) {
            if (blc1 == false) {
                ats1 = false
                atk1 = false
                blc1 = true
                dialogue.innerHTML = "Healer se met en position de défense";
                bloquer();
                box_a.style.visibility = "hidden";
                deathCheck();
                winCheck();
                sleep(500).then(() => {
                    tour = tour + 1;
                    atkMonstres();
                })
                atkMonstres();
            }
        } else {
            tour = tour + 1;
        }
    }
    if (tour == 2) {
        augmente = 0
        if (h2 == false) {
            if (blc2 == false) {
                ats2 = false
                atk2 = false
                blc2 = true
                dialogue.innerHTML = "Augmenteur se met en position de défense";
                bloquer();
                box_a.style.visibility = "hidden";
                deathCheck();
                winCheck();
                sleep(500).then(() => {
                    tour = tour + 1;
                    atkMonstres();
                })
                atkMonstres();
            }
        } else {
            tour = tour +1;
        }
    }
    if (tour == 3) {
        if (h3 == false) {
            if (blc3 == false) {
                ats3 = false
                atk3 = false
                blc3 = true
                dialogue.innerHTML = "Finisher se met en position de défense";
                bloquer();
                box_a.style.visibility = "hidden";
                deathCheck();
                winCheck();
                sleep(500).then(() => {
                    tour = tour + 1;
                    atkMonstres();
                })
                atkMonstres();
            }
        } else {
            tour = tour + 1;
        }
    }
    if (tour == 4) {
        if (h4 == false) {
            if (blc4 == false) {
                ats4 = false
                atk4 = false
                blc4 = true
                dialogue.innerHTML = "Dps se met en position de défense";
                bloquer();
                box_a.style.visibility = "hidden";
                deathCheck();
                winCheck();
                sleep(500).then(() => {
                    tour = tour + 1;
                    atkMonstres();
                })
                atkMonstres();
            }
        } else {
            tour = tour + 1;
            atkMonstres();
        }
    }
}

/*--------------------------------------------------------------------------------------*/

/* Clic sur attaque basique */
  
attaque_speciale.onclick = function(){
    if (tour == 1) {
        if (h1 == false) {
            if (mana_h_1.innerHTML >= 100){
                if (ats1 == false) {
                    ats1 = true
                    atk1 = false
                    blc1 = false
                    mana_h_1.innerHTML = mana_h_1.innerHTML - 100;
                    box_a.style.visibility = "hidden";
                    deathCheck();
                    winCheck();
                    showSpe();
                    sleep(500).then(() => {
                        tour = tour + 1;
                    })
                    atkMonstres();
                }
            }
        } else {
            tour = tour + 1;
        }
    }
    if (tour == 2) {
        if (h2 == false) {
            if (mana_h_2.innerHTML >= 150) {
                if (ats2 == false) {
                    ats2 = true
                    atk2 = false
                    blc2 = false
                    mana_h_2.innerHTML = mana_h_2.innerHTML - 150;
                    box_a.style.visibility = "hidden";
                    winCheck();
                    showSpe();
                    sleep(500).then(() => {
                        tour = tour + 1;
                    })
                    atkMonstres();
                }
            }
        } else {
            tour = tour +1;
        }
    }
    if (tour == 3) {
        if (h3 == false) {
            if (mana_h_3.innerHTML >= 100) {
                if (ats3 == false) {
                    ats3 = true
                    atk3 = false
                    blc3 = false
                    mana_h_3.innerHTML = mana_h_3.innerHTML - 100;
                    box_a.style.visibility = "hidden";
                    winCheck();
                    showSpe();
                    sleep(500).then(() => {
                        tour = tour + 1;
                    })
                    atkMonstres();
                }
            }
        } else {
            tour = tour + 1;
        }
    }
    if (tour == 4) {
        if (h4 == false) {
            if (mana_h_4.innerHTML >= 100) {
                if (ats4 == false) {
                    ats4 = true
                    atk4 = false
                    blc4 = false
                    mana_h_4.innerHTML = mana_h_4.innerHTML - 100;
                    box_a.style.visibility = "hidden";
                    winCheck();
                    showSpe();
                    sleep(500).then(() => {
                        tour = tour + 1;
                        atkMonstres();
                    })
                }
            }
        } else {
            tour = tour + 1;
            atkMonstres();
        }
    }
}

/*--------------------------------------------------------------------------------------*/

function showSpe() {
    if (tour == 1) {
        hero1.style.transform = "translate(50%, 50%)";
        hero1.src= "assets/angel_heal.png";
        hero2.src= "assets/saint_heal.png";
        hero3.src= "assets/samu_heal.png";
        hero4.src= "assets/Spirit_heal.png";
        var heal = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
        dialogue.innerHTML = "Healer soigne tout le monde de " + heal + " !";
        if (parseInt(vie_h_1.innerHTML) > (100-heal)) {
            vie_h_1.innerHTML = 100;
        } else {
            vie_h_1.innerHTML = parseInt(vie_h_1.innerHTML) + heal;
        }
        if (h2 == false) {
            if (parseInt(vie_h_2.innerHTML) > (150-heal)) {
                vie_h_2.innerHTML = 150;
            } else {
                vie_h_2.innerHTML = parseInt(vie_h_2.innerHTML) + heal;
            }
        }
        if (h3 == false) {
            if (parseInt(vie_h_3.innerHTML) > (150-heal)) {
                vie_h_3.innerHTML = 150;
            } else {
                vie_h_3.innerHTML = parseInt(vie_h_3.innerHTML) + heal;
            }
        }
        if (h4 == false) {
            if (parseInt(vie_h_4.innerHTML) > (150-heal)) {
                vie_h_4.innerHTML = 150;
            } else {
                vie_h_4.innerHTML = parseInt(vie_h_4.innerHTML) + heal;
            }
        }
        sleep(500).then(() => {
            hero1.style.transform = "translate(75%, 50%)";
        })
        sleep(1000).then(() => {
            hero1.src= "assets/angel.png";
            hero2.src= "assets/saint.png";
            hero3.src= "assets/samu.png";
            hero4.src= "assets/Spirit.png";
            if (h2 == false) {
                hero2.src= "assets/saint_bis.png";
            } else {
                if (h3 == false) {
                    hero3.src= "assets/samu_bis.png";
                } else {
                    if (h4 == false) {
                        hero4.src= "assets/hero_bis.png";
                    }
                }
            }
        })
    }
    if (tour == 2) {
        hero2.style.transform = "translate(-150%, 140%)";
        hero1.src= "assets/angel_boost.png";
        hero2.src= "assets/saint_def.png";
        hero3.src= "assets/samu_boost.png";
        hero4.src= "assets/Spirit_boost.png";
        augmente = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        dialogue.innerHTML = "Augmenter améliore l'attaque de tout le monde (sauf la sienne mais il passe en position de défense) pendant un tour de " + augmente + " !";
        bloque2 = true;
        sleep(500).then(() => {
            hero2.style.transform = "translate(-90%, 140%)";
        })
        sleep(1000).then(() => {
            hero1.src= "assets/angel.png";
            hero2.src= "assets/saint.png";
            hero3.src= "assets/samu.png";
            hero4.src= "assets/Spirit.png";
            if (h3 == false) {
                hero3.src= "assets/samu_bis.png";
            } else {
                if (h4 == false) {
                    hero4.src= "assets/hero_bis.png";
                }
            }
        })
    }
    if (tour == 3) {
        hero3.style.transform = "translate(10%, 70%)"; 
        if (e1 == false){
            if (vie_e_1.innerHTML <= 25){
                vie_e_1.innerHTML = 0;
            }
        }
        if (e2 == false){
            if (vie_e_2.innerHTML <= 50){
                vie_e_2.innerHTML = 0;
            }
        }
        if (e3 == false){
            if (vie_e_3.innerHTML <= 100){
                vie_e_3.innerHTML = 0;
            }
        }
        dialogue.innerHTML = "Finisher tue INSTANTANEMENT les ennemis si leur vie est inférieure à 1 quart de leur vie totale !";
        sleep(500).then(() => {
            hero3.style.transform = "translate(50%, 70%)";
        })
        sleep(1000).then(() => {
            hero3.src= "assets/samu.png";
            if (h4 == false) {
                hero4.src= "assets/hero_bis.png";
            }
        })
    }
    if (tour == 4) {
        hero4.style.transform = "translate(150%, 100%)";
        var damage = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
            damage = damage + augmente;
        if (e1 == false){
            enemy1.src = "assets/enemy1_1.png"
            sleep(100).then(() => {
                enemy1.src = "assets/enemy1_2.png"
            })
            sleep(200).then(() => {
                enemy1.src = "assets/enemy1_3.png"
            })
            sleep(300).then(() => {
                enemy1.src = "assets/enemy1_4.png"
            })
            sleep(400).then(() => {
                enemy1.src = "assets/enemy1.png"
                vie_e_1.innerHTML = vie_e_1.innerHTML - damage;
                deathCheck();
                winCheck();
            })
        }
        if (e2 == false){
            enemy2.src = "assets/enemy2_1.png"
            sleep(100).then(() => {
                enemy2.src = "assets/enemy2_2.png"
            })
            sleep(200).then(() => {
                enemy2.src = "assets/enemy2_3.png"
            })
            sleep(300).then(() => {
                enemy2.src = "assets/enemy2_4.png"
            })
            sleep(400).then(() => {
                enemy2.src = "assets/enemy2.png"
                vie_e_2.innerHTML = vie_e_2.innerHTML - damage;
                deathCheck();
                winCheck();
            })
        }
        if (e3 == false){
            enemy3.src = "assets/enemy3_1.png"
            sleep(100).then(() => {
                enemy3.src = "assets/enemy3_2.png"
            })
            sleep(200).then(() => {
                enemy3.src = "assets/enemy3_3.png"
            })
            sleep(300).then(() => {
                enemy3.src = "assets/enemy3_4.png"
            })
            sleep(400).then(() => {
                enemy3.src = "assets/enemy3.png"
                vie_e_3.innerHTML = vie_e_3.innerHTML - damage;
                deathCheck();
                winCheck();
            })
        }
        dialogue.innerHTML = "Le Dps inflige " + damage + " dégâts à tout le monde";
        sleep(500).then(() => {
            hero4.style.transform = "translate(200%, 100%)";
        })
        sleep(1000).then(() => {
            hero4.src= "assets/Spirit.png";
        })
    } else {
        sleep(1100).then(() => {
            if (h4 == true) {
                if (tour == 4) {
                    tour = 5;
                    atkMonstres();
                } else {
                    box_a.style.visibility = "visible";
                    griser();
                }
            } else {
                box_a.style.visibility = "visible";
                griser();
            }
        })
    }
    deathCheck();
    winCheck();
}