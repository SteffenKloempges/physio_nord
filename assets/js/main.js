const krankengymnastik = document.querySelector('#krankengymnastik');
const manuelle_therapie = document.querySelector('#manuelle_therapie');
const manuelle_lymphdrainage = document.querySelector('#manuelle_lymphdrainage');
const massage = document.querySelector('#massage');
const waermetherapie = document.querySelector('#waermetherapie');
const kaeltetherapie = document.querySelector('#kaeltetherapie');
const listTextTherapien = document.querySelector('#listTextTherapien');

// =====================================
//  leistungen & therapien text hover
//======================================

krankengymnastik.addEventListener('mouseover', () => {
    listTextTherapien.textContent = `Physiotherapie umfasst die physiotherapeutischen Verfahren der Bewegungstherapie sowie die physikalische Therapie.
    Physiotherapie nutzt als natürliches Heilverfahren die passive - z.B. durch den Therapeuten geführte - und die aktive, selbstständig ausgeführte Bewegung des Menschen sowie den Einsatz physikalischer Maßnahmen zur Heilung und Prävention von Erkrankungen. 
    
    Damit ist die Physiotherapie eine Alternative oder sinnvolle Ergänzung zur medikamentösen oder operativen Therapie.
    
    *Der Begriff „Krankengymnastik“ wird den modernen Anforderungen physiotherapeutischer Verfahren inzwischen nicht mehr gerecht, weil nicht nur „Kranke“ die Leistungen in Anspruch nehmen und „Gymnastik“ als Leibes- und Körperübung die verwendete Methodenvielfalt sehr einschränken würde.`
})

manuelle_therapie.addEventListener('mouseover', () => {
    listTextTherapien.textContent = `Die Manuelle Therapie ist ein Behandlungsansatz, bei dem Funktionsstörungen des Bewegungsapparates untersucht und behandelt werden. Grundlage der Manuellen Therapie sind spezielle Handgriff- und Mobilisationstechniken, bei denen Schmerzen gelindert und Bewegungsstörungen beseitigt werden. Physiotherapeuten untersuchen dabei die Gelenkmechanik, die Muskelfunktion sowie die Koordination der Bewegungen, bevor ein individueller Behandlungsplan festgelegt wird. 
    Die Manuelle Therapie bedient sich sowohl passiver Techniken als auch aktiver Übungen. Zum einen werden blockierte oder eingeschränkte Gelenke von geschulten Physiotherapeuten mithilfe sanfter Techniken mobilisiert, zum anderen können durch individuelle Übungen instabile Gelenke stabilisiert werden. 
    Ziel des Behandlungskonzeptes: Wiederherstellung des Zusammenspieles zwischen Gelenken, Muskeln und Nerven.`
})

manuelle_lymphdrainage.addEventListener('mouseover', () => {
    listTextTherapien.textContent = `Ziel der Behandlung ist es, die reduzierte Pumpfunktion des Gefäßsystems zu unterstützen. In erster Linie dient die manuelle Lymphdrainage der Entstauung von geschwollenem Gewebe. Hierbei handelt es sich zumeist um Schwellungen an Armen oder Beinen. Wir verwenden dabei spezielle Handgriffe, bei denen durch rhythmische, kreisende und pumpende Bewegungen der Handflächen die angestaute Flüssigkeit in Richtung der zuständigen Lymphknotenstation abtransportiert wird. 

    Durch die Atmung und durch zusätzliche Anregung entfernt liegender Lymphknoten kann dabei eine Sogwirkung erzielt werden, die den Abtransport der Gewebsflüssigkeit begünstigt. Das Gewebe schwillt ab, die Schmerzen werden gelindert und das Gewebe wird lockerer und weicher, was sich ebenfalls auf die Beweglichkeit auswirkt.`
})

massage.addEventListener('mouseover', () => {
    listTextTherapien.textContent = `Massagen können sowohl als alleinige Behandlungsform für sich stehen, sie werden aber häufig auch unterstützend zu anderen Therapieformen eingesetzt. Massagen können vom Arzt verschrieben werden.
    Die klassische Massage dient dazu, verspannte Muskelpartien zu lockern, die Durchblutung und den Stoffwechsel zu fördern, den Kreislauf, den Blutdruck, die Atmung und die Psyche positiv zu beeinflussen, sowie Schmerzen zu reduzieren. 
    Unterschiedliche Grifftechniken werden dabei von Therapeuten je nach gewünschter Wirkung angewendet.
    Neben der klassischen Massage haben sich heutzutage die unterschiedlichsten Massageformen entwickelt: wie beispielsweise Bindegewebsmassage, Aromamassage, oder Reflexzonenmassage.`
})

waermetherapie.addEventListener('mouseover', () => {
    listTextTherapien.textContent = `In der Physiotherapie werden verschiedene Therapieverfahren eingesetzt, die Wärme oder Kälte nutzen, um eine schmerzlindernde Wirkung beim Patienten zu erzielen. Sowohl Wärme- als auch Kälteanwendungen können lokal oder am ganzen Körper eingesetzt werden. 

    Die Wärmetherapie wird häufig als unterstützende Maßnahme eingesetzt, weil sie die Durchblutung fördert und entspannend auf die Muskulatur und das Gewebe einwirkt. Verfahren der Wärmetherapie sind zum Beispiel Wärmepackungen, die aus Moor oder Fango bestehen. Wirkung: durchblutungsfördernd, muskelentspannend und schmerzlindernd. Außerdem kommen spezielle Strahler (Heißluft) zum Einsatz, die schmerzende Körperpartien erwärmen. Wirkung: ebenso durchblutungsfördernd, schmerzlindernd.`
})

kaeltetherapie.addEventListener('mouseover', () => {
    listTextTherapien.textContent = `In der Physiotherapie werden verschiedene Therapieverfahren eingesetzt, die Wärme oder Kälte nutzen, um eine schmerzlindernde Wirkung beim Patienten zu erzielen. Sowohl Wärme- als auch Kälteanwendungen können lokal oder am ganzen Körper eingesetzt werden. 

    Auch die Kältetherapie wird häufig als unterstützende Maßnahme eingesetzt. Es gibt unterschiedliche Formen: wie zum Beispiel Kühlpacks, Kompressen, Eisbad oder Eisabreibung. Die Wirkung der Kältetherapie ist je nach Temperatur unterschiedlich. Sie wirkt schmerzlindernd, entzündungshemmend und verbessert die Durchblutung.`
})

// ========================
//      faq accordion
// ========================

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

let accLeistungen = document.getElementsByClassName("accordion_leistungen_mobile");
let iLeistungen;

for (iLeistungen = 0; iLeistungen < accLeistungen.length; iLeistungen++) {
    accLeistungen[iLeistungen].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}