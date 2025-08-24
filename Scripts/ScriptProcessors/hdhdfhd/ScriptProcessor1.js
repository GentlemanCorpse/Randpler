Content.makeFrontInterface(600, 200);

// --- Buttons ---
const btnLoad = Content.getComponent("btnLoad");
const btnRnd  = Content.getComponent("btnRnd");
const btnChaos  = Content.getComponent("btnChaos");
const var btnRandrev = Content.getComponent("btnRandrev");
const var PARAM_REVERSE = 9;

// --- AudioSampleProcessor ---
const Alp0 = Synth.getAudioSampleProcessor("Alp0");
const Alp0AHDSR = Synth.getModulator("Alp0AHDSR");

// --- Resets Audio Waveform on startup ---
{
Alp0.setFile(0);
}

// --- Storage (persistent) ---
reg fileArray = [];   // array to hold audio files

// --- Define inline functions for loading folder ---
inline function onbtnLoad(c, v)
{
    if (v)
    {
        FileSystem.browseForDirectory(c, function(dir)
		{
        fileArray = []; // reset array
        fileArray = FileSystem.findFiles(dir, "*.wav", false);
        Console.print("Loaded " + fileArray.length + " audio files.");
    	});	
	}
}

// --- Define inline functions for randomize folder ---
inline function onbtnRnd(c, v)
{
    if (v)
    {
        if (fileArray.length > 0)
        {
            local index = Math.randInt(0, fileArray.length);
            local chosen = fileArray[index];

            Console.print("Loading file: " + chosen.toString(Filename));
            Alp0.setFile(chosen.toString(Filename));
        }
        else
        {
            Console.print("No files loaded yet!");
        }
    }
}

// --- Bind buttons to callbacks ---
btnLoad.setControlCallback(onbtnLoad);
btnRnd.setControlCallback(onbtnRnd);function onNoteOn()
{
	
	 	if (btnChaos.getValue()) // only if Chaos is active
	     {
	         // Trigger the same function as btnRnd would
	         onbtnRnd(btnRnd, 1);
	     }
	 

     if (btnRandrev.getValue()) // button active
     {
         // Random 0 or 1
         local rnd = Math.randInt(0, 2);
 
         Alp0.setAttribute(9, rnd);
     }
     else
     {
         // Button off → always reset to normal
         Alp0.setAttribute(9, 0);
     }
}function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 