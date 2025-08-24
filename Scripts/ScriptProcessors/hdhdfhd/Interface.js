Content.makeFrontInterface(600, 200);
const var LED = Content.getComponent("ledWhite");
const var LED1 = Content.getComponent("ledWhite1");
LED.set("visible", false);
LED1.set("visible", false);


// --- about me button code start ---
// fltAbout FloatingTile
const var fltAbout = Content.getComponent("fltAbout");
const var pnlLogo = Content.getComponent("pnlLogo"); 

// Hook a MouseCallback to the pnlLogo that lies transparently over the Logo. 
pnlLogo.setMouseCallback(function(event)
{
    if (event.clicked) {
        // Sets a free definable "pnlLogo.data.variable" to the inverted value of the last value.
        pnlLogo.data.show = (1 - pnlLogo.data.show);
        // Set the fltAbout FloatingTile property "visible" to that variables value.
        fltAbout.set("visible", pnlLogo.data.show);    
    }
});
// --- about me button code end ---


// --- random reverse start ---

// References
const var btnRandrev = Content.getComponent("btnRandrev");

// Reverse parameter ID (check in HISE if it's different)
// Usually 3 for AudioLoopPlayer
const var PARAM_REVERSE = 9;

// --- random reverse start ---function onNoteOn()
{
    LED.set("visible", true); // show when any note is pressed
	LED1.set("visible", true); // show when any note is pressed
}function onNoteOff()
{
    LED.set("visible", false); // hide when all notes are released
    LED1.set("visible", false); // hide when all notes are released
}function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 