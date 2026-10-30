Add-Type -AssemblyName System.Speech
$s = [System.Speech.Synthesis.SpeechSynthesizer]::new()
$s.SelectVoice('Microsoft Zira Desktop')
$s.Rate = 0
$s.Volume = 92
$s.SetOutputToWaveFile((Join-Path (Get-Location) 'outputs\defcon-film\assets\voiceover.wav'))
$ssml = "<speak version='1.0' xml:lang='en-US'><prosody rate='-4%' pitch='-8%' volume='loud'>Every system has a weakness. Every defence has a vulnerability. Do you have what it takes to find it? <break time='250ms'/> Enter DEFCON, a Capture the Flag challenge where cybersecurity meets strategy, speed and skill. <break time='200ms'/> Attack by discovering vulnerabilities and exploiting weaknesses. Defend by detecting intrusions, removing threats and securing your systems. <break time='150ms'/> Take control of a Linux environment. Complete objectives, earn points and protect your system from incoming attacks. <break time='200ms'/> Compete, dominate and take home exciting prizes, including premium subscriptions to Claude Max or Pro, OpenAI Codex, GitHub Copilot, and more exclusive subscriptions.</prosody></speak>"
$s.SpeakSsml($ssml)
$s.Dispose()
