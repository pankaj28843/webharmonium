# Web Harmonium (Forked & Modified)

A browser-based harmonium that can be played using either your computer keyboard or any MIDI keyboard. This fork preserves the original functionality by [Rajaraman Iyer](https://github.com/rajaramaniyer) while extending compatibility to all MIDI keyboards (removing restrictive event listeners). Modifications were developed with the assistance of ChatGPT to streamline MIDI handling.

## Demo
  - This Fork (Modified) Demo
  - Original Demo by Rajaraman Iyer: https://rajaramaniyer.github.io/webharmonium.html

## Overview

This project allows you to play harmonium samples in the browser, either via computer keyboard (mapped to specific MIDI notes) or by plugging in any compliant MIDI keyboard. When you press a key (or a MIDI key), the harmonium audio buffer is detuned and looped to simulate a real harmonium’s reed sound.
  - Original Source:
https://github.com/rajaramaniyer/rajaramaniyer.github.io/blob/ac4aa45/webharmonium.html
  - Original Demo:
https://rajaramaniyer.github.io/webharmonium.html

This fork’s primary change was to replace the original, more restrictive MIDI event listeners so that any standard MIDI keyboard can be selected and used. ChatGPT was used to refactor the JavaScript handling of MIDI messages—removing hard-coded event filters and enabling a dynamic dropdown of all available MIDI inputs.

## Features
  - Computer Keyboard Playback
  - Play a harmonium sample by pressing mapped computer keys (e.g., q, w, e, r, t, y, u, i, o, p, etc.).
  - Key-to-MIDI mapping is identical to the original.
  - Full MIDI Compatibility
  - Dynamically enumerates all connected MIDI input devices.
  - Any selected MIDI keyboard can be used; no more restrictive event filtering.
  - Volume control via standard MIDI CC (#7) if available.
  - Adjustable Controls
  - Volume Slider: Change gain from 1% to 100%.
  - Reverb Toggle: Turn convolution reverb on/off.
  - Transpose: Shift root note up/down by semitone (–11 to +11).
  - Octave Shift: Move the current keyboard octave from 0 to 6.
  - Additional Reeds (Stack): Add up to 3 extra octaves (stacks).
  - Visual Keyboard
  - On-screen SVG keyboard with interactive polygons for mouse/touch playback.
  - Labels show both the computer key and the corresponding musical note (C, D, E, etc.).

## Usage
1.	Load the Page
    - Click “Load Module” to initialize the AudioContext, load the harmonium sample (harmonium-kannan-orig.wav), and enumerate MIDI devices.
2.	Playing via Computer Keyboard
    - Simply press any mapped key (e.g., q for MIDI note 59, e for 60, etc.).
    - Release the key to stop the note.
3.	Playing via MIDI Keyboard
    - After loading, select your MIDI device from the dropdown labeled “MIDI Keyboard”.
    - Play any key; velocity > 0 will trigger noteOn, velocity = 0 or a noteOff message will release it.
4.	Adjust Settings
    - Volume → drag the green slider.
    - Reverb → toggle on/off.
    - Transpose → click “–” or “+” to shift semitones; root note updates accordingly.
    - Octave → click “–” or “+” to change the current octave.
    - Additional Reeds → click “–” or “+” to add extra octave stacks.

## Credit & Attributions
- Original Author: Rajaraman Iyer
    - Source Code: https://github.com/rajaramaniyer/rajaramaniyer.github.io/blob/ac4aa45/webharmonium.html
    - Demo: https://rajaramaniyer.github.io/webharmonium.html
    - Modifications (This Fork):
        - Purpose: Extend compatibility to all MIDI keyboards by removing hard-coded event listeners.
        - Assistance: JavaScript refactoring and logic updates were accomplished with guidance from ChatGPT.
        - Specific Changes:
            1.	Replaced restrictive input.onmidimessage filters with a dynamic enumeration of all MIDI inputs (for (let input of midiAccess.inputs.values()) { … }).
            2.	Changed the MIDI parsing logic to mask out channel bits (status = rawStatus & 0xF0) so all channels are accepted.
            3.	Updated HTML `<select>` for MIDI devices to repopulate on each request.
            4.	Preserved original key-mapping and sample handling logic, ensuring consistent behavior for computer-keyboard playback.

## License

This fork inherits the same usage permissions as the original. Please refer to the LICENSE file (if provided by the original repository) or treat this work under a permissive license consistent with the original author’s terms.
All credit for the core “Web Harmonium” implementation belongs to Rajaraman Iyer.

---

Important: If you redistribute or deploy a public demo, please keep the original author’s credit intact (see above). Feel free to share improvements back to the community!