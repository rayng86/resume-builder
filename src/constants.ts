import { ResumeProps } from './types';

export const INITIAL_VALUES: ResumeProps = {
  firstName: 'Raymond',
  middleName: '',
  lastName: 'Ng',
  jobTitle: 'Software Engineer',
  professionalExperiences: [{
    jobPosition: 'Software Engineer',
    company: 'Google',
    startDate: '11/05/2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }],
  skills: [{ name: 'JavaScript' }],
};

export const PROGRAMMING_SOFTWARES = [
  { name: 'Adobe Photoshop' },
  { name: 'Adobe Creative Suite' },
  { name: 'Microsoft Word' },
  { name: 'Microsoft Excel' },
  { name: 'Terminal' },
  { name: 'Sketch' },
  { name: 'Zeplin' },
];

export const PROCEDURAL_EXTENSIONS = [
  { name: 'MariaDB' },
  { name: 'MySQL' },
  { name: 'PostgresSQL' },
];

export const FRAMEWORKS = [
  { name: 'Node.JS' },
  { name: 'React' },
  { name: 'ReactNative' },
  { name: 'Redux' },
  { name: 'AngularJS' },
  { name: 'VueJS' },
  { name: 'SocketIO' },
  { name: 'NestJS' },
  { name: 'ExpressJS' },
  { name: 'SailsJS' },
  { name: 'Koa.JS' },
  { name: 'LoopBack' },
  { name: 'Derby.JS' },
  { name: 'Mean.io' },
  { name: 'Restify.Js' },
];

export const OTHER = [
  { name: 'Web Design' },
  { name: 'Responsive Web Design' },
  { name: 'Mobile' },
  { name: 'RESTFUL API' },
  { name: 'REST' },
];

export const PROGRAMMING_LANGUAGES = [
  { name: 'A Sharp (.NET)' },
  { name: 'A-0 System' },
  { name: 'A+ (programming language)' },
  { name: 'ABAP' },
  { name: 'ABC (programming language)' },
  { name: 'ABC ALGOL' },
  { name: 'ACC (programming language)' },
  { name: 'Accent (programming language)' },
  { name: 'Distributed Application Specification Language' },
  { name: 'Action! (programming language)' },
  { name: 'ActionScript' },
  { name: 'Actor (programming language)' },
  { name: 'Ada (programming language)' },
  { name: 'Adenine (programming language)' },
  { name: 'Agda (theorem prover)' },
  { name: 'Agilent VEE' },
  { name: 'Agora (programming language)' },
  { name: 'AIMMS' },
  { name: 'Aldor' },
  { name: 'Alef (programming language)' },
  { name: 'Algebraic Logic Functional programming language' },
  { name: 'ALGOL 58' },
  { name: 'ALGOL 60' },
  { name: 'ALGOL 68' },
  { name: 'ALGOL W' },
  { name: 'Alice (programming language)' },
  { name: 'Alma-0' },
  { name: 'AmbientTalk' },
  { name: 'Amiga E' },
  { name: 'AMOS (programming language)' },
  { name: 'AMPL' },
  { name: 'AngelScript' },
  { name: 'Apex (programming language)' },
  { name: 'APL (programming language)' },
  { name: 'App Inventor for Android (programming language)' },
  { name: 'AppleScript' },
  { name: 'APT (programming language)' },
  { name: 'Arc (programming language)' },
  { name: 'ARexx' },
  { name: 'Argus (programming language)' },
  { name: 'Assembly language' },
  { name: 'AutoHotkey' },
  { name: 'AutoIt' },
  { name: 'AutoLISP' },
  { name: 'Averest' },
  { name: 'AWK' },
  { name: 'Axum (programming language)' },
  { name: 'Babbage (programming language)' },
  { name: 'Ballerina (programming language)' },
  { name: 'Bash (Unix shell)' },
  { name: 'BASIC' },
  { name: 'Batch file' },
  { name: 'Bc (programming language)' },
  { name: 'BCPL' },
  { name: 'BeanShell' },
  { name: 'Bertrand (programming language)' },
  { name: 'BETA (programming language)' },
  { name: 'BLISS (programming language)' },
  { name: 'Blockly' },
  { name: 'BlooP and FlooP' },
  { name: 'Boo (programming language)' },
  { name: 'Boomerang (programming language)' },
  { name: 'Bosque (programming language)' },
  { name: 'Bourne shell' },
  { name: 'Korn shell' },
  { name: 'C--' },
  { name: 'C++' },
  { name: 'C*' },
  { name: 'C Sharp (programming language)' },
  { name: 'C/AL' },
  { name: 'Cach\\u00e9 ObjectScript' },
  { name: 'C Shell' },
  { name: 'Caml' },
  { name: 'Cayenne (programming language)' },
  { name: 'CDuce' },
  { name: 'Cecil (programming language)' },
  { name: 'Cesil' },
  { name: 'C\\u00e9u (programming language)' },
  { name: 'Ceylon (programming language)' },
  { name: 'CFEngine' },
  { name: 'Cg (programming language)' },
  { name: 'Ch (computer programming)' },
  { name: 'Chapel (programming language)' },
  { name: 'Charm (language)' },
  { name: 'CHILL' },
  { name: 'CHIP-8' },
  { name: 'Chomski' },
  { name: 'ChucK' },
  { name: 'Cilk' },
  { name: 'Citrine (programming language)' },
  { name: 'AS/400 Control Language' },
  { name: 'Claire (programming language)' },
  { name: 'Clarion (programming language)' },
  { name: 'Clean (programming language)' },
  { name: 'Clipper (programming language)' },
  { name: 'CLIPS (programming language)' },
  { name: 'CLIST' },
  { name: 'Clojure' },
  { name: 'CLU (programming language)' },
  { name: 'CMS-2 (programming language)' },
  { name: 'COBOL' },
  { name: 'CobolScript' },
  { name: 'Cobra (programming language)' },
  { name: 'CoffeeScript' },
  { name: 'ColdFusion' },
  { name: 'COMAL' },
  { name: 'Combined Programming Language' },
  { name: 'COMIT' },
  { name: 'Common Intermediate Language' },
  { name: 'Common Lisp' },
  { name: 'COMPASS' },
  { name: 'Component Pascal' },
  { name: 'Constraint Handling Rules' },
  { name: 'COMTRAN' },
  { name: 'Cool (programming language)' },
  { name: 'Coq' },
  { name: 'Coral 66' },
  { name: 'CorVision' },
  { name: 'COWSEL' },
  { name: 'CPL (programming language)' },
  { name: 'Cryptol' },
  { name: 'Crystal (programming language)' },
  { name: 'Csound' },
  { name: 'CSS' },
  { name: 'Cuneiform (programming language)' },
  { name: 'Curl (programming language)' },
  { name: 'Curry (programming language)' },
  { name: 'Cybil (programming language)' },
  { name: 'Cyclone (programming language)' },
  { name: 'Cypher Query Language' },
  { name: 'Cython' },
  { name: 'CEEMAC' },
  { name: 'Digital Asset Modeling Language (DAML) (page does not exist)' },
  { name: "Datapoint's Advanced Systems Language" },
  { name: 'Dart (programming language)' },
  { name: 'Darwin (programming language)' },
  { name: 'DataFlex' },
  { name: 'Datalog' },
  { name: 'DATATRIEVE' },
  { name: 'DBase' },
  { name: 'Dc (computer program)' },
  { name: 'DIGITAL Command Language' },
  { name: 'Dink Smallwood' },
  { name: 'DIBOL' },
  { name: 'DNA' },
  { name: 'Dog (programming language)' },
  { name: 'Draco (programming language)' },
  { name: 'DRAKON' },
  { name: 'Dylan (programming language)' },
  { name: 'DYNAMO (programming language)' },
  { name: 'Data analysis expressions' },
  { name: 'Ease (programming language)' },
  { name: 'PL/I' },
  { name: 'Easytrieve' },
  { name: 'EC (programming language)' },
  { name: 'ECMAScript' },
  { name: 'Edinburgh IMP' },
  { name: 'EGL (programming language)' },
  { name: 'Eiffel (programming language)' },
  { name: 'ELAN (programming language)' },
  { name: 'Elixir (programming language)' },
  { name: 'Elm (programming language)' },
  { name: 'Emacs Lisp' },
  { name: 'Emerald (programming language)' },
  { name: 'Epigram (programming language)' },
  { name: 'Easy Programming Language' },
  { name: 'Eltron Programming Language' },
  { name: 'Erlang (programming language)' },
  { name: 'Es (Unix shell)' },
  { name: 'Escher (programming language)' },
  { name: 'Executive Systems Problem Oriented Language' },
  { name: 'Esterel' },
  { name: 'Etoys (programming language)' },
  { name: 'Euclid (programming language)' },
  { name: 'Euler (programming language)' },
  { name: 'Euphoria (programming language)' },
  { name: 'EusLisp Robot Programming Language' },
  { name: 'CMS EXEC' },
  { name: 'EXEC 2' },
  { name: 'Executable UML' },
  { name: 'Ezhil (programming language)' },
  { name: 'F Sharp (programming language)' },
  { name: 'F* (programming language)' },
  { name: 'Factor (programming language)' },
  { name: 'Fantom (programming language)' },
  { name: 'FAUST (programming language)' },
  { name: 'FFP (programming language)' },
  { name: 'Friendly interactive shell' },
  { name: 'Fj\\u00f6lnir (programming language)' },
  { name: 'FL (programming language)' },
  { name: 'Flavors (programming language)' },
  { name: 'Flex (language)' },
  { name: 'FLOW-MATIC' },
  { name: 'FOCAL (programming language)' },
  { name: 'FOCUS' },
  { name: 'FOIL (programming language)' },
  { name: 'FORMAC (programming language)' },
  { name: 'Formula language' },
  { name: 'Forth (programming language)' },
  { name: 'Fortran' },
  { name: 'Fortress (programming language)' },
  { name: 'FP (programming language)' },
  { name: 'Franz Lisp' },
  { name: 'Futhark (programming language)' },
  { name: 'F-Script (programming language)' },
  { name: 'Game Maker Language' },
  { name: 'Scripting language' },
  { name: 'GameMonkey Script' },
  { name: 'General Algebraic Modeling System' },
  { name: 'GAP computer algebra system' },
  { name: 'G-code' },
  { name: 'GDScript' },
  { name: 'Genie (programming language)' },
  { name: 'Geometric Description Language' },
  { name: 'GEORGE (programming language)' },
  { name: 'GIT' },
  { name: 'GLSL' },
  { name: 'GNU E' },
  { name: 'GNU Guile' },
  { name: 'Go (programming language)' },
  { name: 'Go! (programming language)' },
  { name: 'Game Oriented Assembly Lisp' },
  { name: 'G\\u00f6del (programming language)' },
  { name: 'Golo (programming language)' },
  { name: 'MAD (programming language)' },
  { name: 'Google Apps Script' },
  { name: 'Gosu (programming language)' },
  { name: 'IBM 1620' },
  { name: 'GPSS' },
  { name: 'Computer Sciences Corporation' },
  { name: 'GRASS (programming language)' },
  { name: 'Grasshopper 3D' },
  { name: 'Groovy (programming language)' },
  { name: 'Hack (programming language)' },
  { name: 'HAGGIS' },
  { name: 'HAL/S' },
  { name: 'HTML' },
  { name: 'Halide (programming language)' },
  { name: 'Hamilton C shell' },
  { name: 'Harbour (software)' },
  { name: 'Hartmann pipeline' },
  { name: 'Haskell (programming language)' },
  { name: 'Haxe' },
  { name: 'Hermes (programming language)' },
  { name: 'High Level Assembly' },
  { name: 'High Level Shader Language' },
  { name: 'Hollywood (programming language)' },
  { name: 'TempleOS' },
  { name: 'Hop (software)' },
  { name: 'Hopscotch (programming language)' },
  { name: 'Hope (programming language)' },
  { name: 'Hugo (programming language)' },
  { name: 'Hume (language)' },
  { name: 'HyperTalk' },
  { name: 'Io (programming language)' },
  { name: 'Icon (programming language)' },
  { name: 'IBM Basic assembly language' },
  { name: 'IBM HAScript' },
  { name: 'IBM Informix-4GL' },
  { name: 'IBM RPG' },
  { name: 'IDL (programming language)' },
  { name: 'Idris (programming language)' },
  { name: 'Inform (programming language)' },
  { name: 'J Sharp' },
  { name: 'Visual J++' },
  { name: 'JADE (programming language)' },
  { name: 'JAL (compiler)' },
  { name: 'Janus (concurrent constraint programming language)' },
  { name: 'Janus (time-reversible computing programming language)' },
  { name: 'JASS' },
  { name: 'Java (programming language)' },
  { name: 'JavaFX Script' },
  { name: 'JavaScript' },
  { name: 'Jess (programming language)' },
  { name: 'Job Control Language' },
  { name: 'JEAN' },
  { name: 'Join Java' },
  { name: 'JOSS' },
  { name: 'Joule (programming language)' },
  { name: 'JOVIAL' },
  { name: 'Joy (programming language)' },
  { name: 'JQuery' },
  { name: 'JScript' },
  { name: 'JScript .NET' },
  { name: 'Julia (programming language)' },
  { name: 'Jython' },
  { name: 'Kaleidoscope (programming language)' },
  { name: 'Karel (programming language)' },
  { name: 'IntelliCorp (Software)' },
  { name: 'KiXtart' },
  { name: 'Klerer-May System' },
  { name: 'Knowledge Interchange Format' },
  { name: 'Kojo (programming language)' },
  { name: 'Kotlin (programming language)' },
  { name: 'Kent Recursive Calculator' },
  { name: 'KRL (programming language)' },
  { name: 'KUKA Robot Language' },
  { name: 'KRYPTON' },
  { name: 'Kodu Game Lab' },
  { name: 'Kivy (framework)' },
  { name: 'LabVIEW' },
  { name: 'Ladder logic' },
  { name: 'LANSA (development environment)' },
  { name: 'Lasso (programming language)' },
  { name: 'Lava (programming language)' },
  { name: 'Little Computer 3' },
  { name: 'Legoscript' },
  { name: 'Little Implementation Language' },
  { name: 'LilyPond' },
  { name: 'Limbo (programming language)' },
  { name: 'Limnor' },
  { name: 'LINC 4GL' },
  { name: 'Lingo (programming language)' },
  { name: 'LINQ' },
  { name: 'LIS (programming language)' },
  { name: 'Language for Instruction Set Architecture' },
  { name: 'Language H' },
  { name: 'Lisp (programming language)' },
  { name: 'Lite-C' },
  { name: 'Lithe (programming language)' },
  { name: 'Little b (programming language)' },
  { name: 'Ethereum' },
  { name: 'Logo (programming language)' },
  { name: 'Logtalk' },
  { name: 'LotusScript' },
  { name: 'LPC (programming language)' },
  { name: 'LSE (programming language)' },
  { name: 'Linden Scripting Language' },
  { name: 'LiveCode' },
  { name: 'LiveScript' },
  { name: 'Lua (programming language)' },
  { name: 'Lucid (programming language)' },
  { name: 'Lustre (programming language)' },
  { name: 'LYaPAS' },
  { name: 'Lynx (programming language)' },
  { name: 'M2001' },
  { name: 'M4 (computer language)' },
  { name: 'M Sharp (programming language)' },
  { name: 'Machine code' },
  { name: 'Magik (programming language)' },
  { name: 'Magma computer algebra system' },
  { name: 'M\\u00e1ni' },
  { name: 'Maple (software)' },
  { name: 'MAPPER' },
  { name: 'MARK IV (software)' },
  { name: 'Mary (programming language)' },
  { name: 'MATLAB' },
  { name: 'Microsoft Macro Assembler' },
  { name: 'MATH-MATIC' },
  { name: 'Maude system' },
  { name: 'Maxima (software)' },
  { name: 'Macsyma' },
  { name: 'Max (software)' },
  { name: 'Autodesk 3ds Max' },
  { name: 'Maya Embedded Language' },
  { name: 'MDL (programming language)' },
  { name: 'Mercury (programming language)' },
  { name: 'Mesa (programming language)' },
  { name: 'Metafont' },
  { name: 'MHEG-5' },
  { name: 'Microassembler' },
  { name: 'MicroScript (programming language)' },
  { name: 'MIIS (programming language)' },
  { name: 'Milk (programming language)' },
  { name: 'MIMIC' },
  { name: 'Mirah (programming language)' },
  { name: 'Miranda (programming language)' },
  { name: 'MIVA Script' },
  { name: 'ML (programming language)' },
  { name: 'Model 204' },
  { name: 'Modelica' },
  { name: 'Modula' },
  { name: 'Modula-2' },
  { name: 'Modula-3' },
  { name: 'Mohol programming languages' },
  { name: 'MOO (programming language)' },
  { name: 'Mortran' },
  { name: 'Mouse (programming language)' },
  { name: 'MPD (programming language)' },
  { name: 'Mathcad' },
  { name: 'MIRC scripting language' },
  { name: 'MUMPS' },
  { name: 'MuPAD' },
  { name: 'Mystic BBS' },
  { name: 'Netwide Assembler' },
  { name: 'Napier88' },
  { name: 'Neko (programming language)' },
  { name: 'Nemerle' },
  { name: 'NESL' },
  { name: 'Net.Data' },
  { name: 'NetLogo' },
  { name: 'NetRexx' },
  { name: 'NewLISP' },
  { name: 'NEWP' },
  { name: 'Newspeak (programming language)' },
  { name: 'NewtonScript' },
  { name: 'Nial' },
  { name: 'Nice (programming language)' },
  { name: 'Nickle (programming language)' },
  { name: 'Nim (programming language)' },
  { name: 'NORD Programming Language' },
  { name: 'Not eXactly C' },
  { name: 'Not Quite C' },
  { name: 'Nullsoft Scriptable Install System' },
  { name: 'Nu (programming language)' },
  { name: 'NWScript' },
  { name: 'NXT-G' },
  { name: 'O:XML' },
  { name: 'Oak (programming language)' },
  { name: 'Oberon (programming language)' },
  { name: 'OBJ2' },
  { name: 'Object Lisp' },
  { name: 'ObjectLOGO' },
  { name: 'Object REXX' },
  { name: 'Object Pascal' },
  { name: 'Objective-C' },
  { name: 'Objective-J' },
  { name: 'Obliq' },
  { name: 'OCaml' },
  { name: 'Occam (programming language)' },
  { name: 'Occam-\\u03c0' },
  { name: 'GNU Octave' },
  { name: 'OmniMark' },
  { name: 'Opa (programming language)' },
  { name: 'Opal (programming language)' },
  { name: 'OpenCL' },
  { name: 'OpenEdge Advanced Business Language' },
  { name: 'Open Programming Language' },
  { name: 'OpenVera' },
  { name: 'OPS5' },
  { name: 'OptimJ' },
  { name: 'Orc (programming language)' },
  { name: 'ORCA/Modula-2' },
  { name: 'Oriel (scripting language)' },
  { name: 'Orwell (programming language)' },
  { name: 'Oxygene (programming language)' },
  { name: 'Oz (programming language)' },
  { name: 'P (programming language)' },
  { name: 'P4 (programming language)' },
  { name: 'P\\u2032\\u2032' },
  { name: 'ParaSail (programming language)' },
  { name: 'PARI/GP' },
  { name: 'Pascal (programming language)' },
  { name: 'Pascal Script' },
  { name: 'PCASTL' },
  { name: 'Programming language for Computable Functions' },
  { name: 'PEARL (programming language)' },
  { name: 'PeopleCode' },
  { name: 'Perl' },
  { name: 'Perl Data Language' },
  { name: 'Pharo' },
  { name: 'PHP' },
  { name: 'Pico (programming language)' },
  { name: 'Picolisp' },
  { name: 'Pict (programming language)' },
  { name: 'Pig (programming tool)' },
  { name: 'Pike (programming language)' },
  { name: 'PILOT' },
  { name: 'Pizza (programming language)' },
  { name: 'PL-11' },
  { name: 'PL/0' },
  { name: 'Programming Language for Business' },
  { name: 'PL/C' },
  { name: 'PL/M' },
  { name: 'PL/P' },
  { name: 'PL/SQL' },
  { name: 'PL360' },
  { name: 'PLANC' },
  { name: 'Plankalk\\u00fcl' },
  { name: 'Planner (programming language)' },
  { name: 'PLEX (programming language)' },
  { name: 'PLEXIL' },
  { name: 'Plus (programming language)' },
  { name: 'POP-11' },
  { name: 'POP-2' },
  { name: 'PostScript' },
  { name: 'POV-Ray' },
  { name: 'Powerhouse (programming language)' },
  { name: 'PowerBuilder' },
  { name: 'PowerShell' },
  { name: 'Polymorphic Programming Language' },
  { name: 'Processing (programming language)' },
  { name: 'Processing.js' },
  { name: 'Prograph' },
  { name: 'PROIV' },
  { name: 'Prolog' },
  { name: 'PROMAL' },
  { name: 'Promela' },
  { name: 'PROSE modeling language' },
  { name: 'Protel' },
  { name: 'ProvideX' },
  { name: 'Pro*C' },
  { name: 'Pure (programming language)' },
  { name: 'Pure Data' },
  { name: 'PureScript' },
  { name: 'Python (programming language)' },
  { name: 'Q (programming language from Kx Systems)' },
  { name: 'Q Sharp' },
  { name: 'Qalb (programming language)' },
  { name: 'Quantum Computation Language' },
  { name: 'QtScript' },
  { name: 'QuakeC' },
  { name: 'Quantum programming' },
  { name: 'Qbasic' },
  { name: '.QL' },
  { name: 'R (programming language)' },
  { name: 'R++' },
  { name: 'Racket (programming language)' },
  { name: 'Raku (programming language)' },
  { name: 'RAPID' },
  { name: 'Rapira' },
  { name: 'Ratfiv' },
  { name: 'Ratfor' },
  { name: 'Rc' },
  { name: 'Reason (programming language)' },
  { name: 'REBOL' },
  { name: 'Red (programming language)' },
  { name: 'Core War' },
  { name: 'REFAL' },
  { name: 'REXX' },
  { name: 'Rlab' },
  { name: 'RNA' },
  { name: 'ROOP (programming language)' },
  { name: 'RPL (programming language)' },
  { name: 'Robot Battle' },
  { name: 'RTL/2' },
  { name: 'Ruby (programming language)' },
  { name: 'Rust (programming language)' },
  { name: 'S (programming language)' },
  { name: 'S2 (programming language)' },
  { name: 'S3 (programming language)' },
  { name: 'SARS' },
  { name: 'S-Lang (programming language)' },
  { name: 'S-PLUS' },
  { name: 'SA-C (programming language)' },
  { name: 'SabreTalk' },
  { name: 'SAIL (programming language)' },
  { name: 'SAM76 (page does not exist)' },
  { name: 'SAS System' },
  { name: 'SASL (programming language)' },
  { name: 'Sather' },
  { name: 'Sawzall (programming language)' },
  { name: 'Scala (programming language)' },
  { name: 'Scheme (programming language)' },
  { name: 'Scilab' },
  { name: 'SCOTUS' },
  { name: 'Scratch (programming language)' },
  { name: 'Script.NET' },
  { name: 'SEC' },
  { name: 'Sed' },
  { name: 'Seed7' },
  { name: 'Self (programming language)' },
  { name: 'SenseTalk' },
  { name: 'SEO' },
  { name: 'SequenceL' },
  { name: 'Serbian' },
  { name: 'SETL' },
  { name: 'Superbase database' },
  { name: 'Sharchhopka (page does not exist)' },
  { name: 'SIGNAL (programming language)' },
  { name: 'SiMPLE' },
  { name: 'SIMSCRIPT' },
  { name: 'Simula' },
  { name: 'Simulink' },
  { name: 'Singularity (operating system)' },
  { name: 'SISAL' },
  { name: 'SLIP (programming language)' },
  { name: 'SMALL' },
  { name: 'Smalltalk' },
  { name: 'Standard ML' },
  { name: 'Strongtalk' },
  { name: 'Snap! (programming language)' },
  { name: 'SNOBOL' },
  { name: 'SPITBOL compiler' },
  { name: 'Snowball programming language' },
  { name: 'Secure Operations Language' },
  { name: 'Solidity' },
  { name: 'SOPHAEROS' },
  { name: 'Source (programming language)' },
  { name: 'Spanish' },
  { name: 'SPARK (programming language)' },
  { name: 'Speakeasy (computational environment)' },
  { name: 'Speedcoding' },
  { name: 'Parallax Propeller' },
  { name: 'SP/k' },
  { name: 'IBM 1401 Symbolic Programming System' },
  { name: 'SQL' },
  { name: 'SQR' },
  { name: 'Squeak' },
  { name: 'Squirrel (programming language)' },
  { name: 'SR (programming language)' },
  { name: 'S/SL programming language' },
  { name: 'Starlogo' },
  { name: 'Strand (programming language)' },
  { name: 'Stata' },
  { name: 'Stateflow' },
  { name: 'Subtext (programming language)' },
  { name: 'SuperCollider' },
  { name: 'SuperTalk' },
  { name: 'Swift (programming language)' },
  { name: 'Swift (parallel scripting language)' },
  { name: 'SYMPL' },
  { name: 'SystemVerilog' },
  { name: 'TACL' },
  { name: 'TACPOL (programming language)' },
  { name: 'TADS' },
  { name: 'Transaction Application Language' },
  { name: 'Tcl' },
  { name: 'Tea (programming language)' },
  { name: 'Text Editor and Corrector' },
  { name: 'TELCOMP' },
  { name: 'TeX' },
  { name: 'Text Executive Programming Language' },
  { name: 'Tensilica Instruction Extension' },
  { name: 'TMG (language)' },
  { name: 'Tom (pattern matching language)' },
  { name: 'TOM (object-oriented programming language)' },
  { name: 'Toi (programming language)' },
  { name: 'Text Processing Utility' },
  { name: 'TRAC (programming language)' },
  { name: 'TTM (programming language)' },
  { name: 'Transact-SQL' },
  { name: 'Transcript (programming language)' },
  { name: 'TTCN' },
  { name: 'Turing (programming language)' },
  { name: 'TUTOR (programming language)' },
  { name: 'TXL (programming language)' },
  { name: 'TypeScript' },
  { name: 'Tynker' },
  { name: 'Ubercode' },
  { name: 'UCSD Pascal' },
  { name: 'Umple' },
  { name: 'Unicon (programming language)' },
  { name: 'Uniface (programming language)' },
  { name: 'UNITY (programming language)' },
  { name: 'Unix shell' },
  { name: 'UnrealScript' },
  { name: 'Vala (programming language)' },
  { name: 'Verilog' },
  { name: 'VHDL' },
  { name: 'Vim (text editor)' },
  { name: 'Visual Basic' },
  { name: 'Visual Basic .NET' },
  { name: 'Visual DataFlex' },
  { name: 'Visual DialogScript' },
  { name: 'Visual Fortran' },
  { name: 'Visual FoxPro' },
  { name: 'Visual Objects' },
  { name: 'Visual Prolog' },
  { name: 'VSXu' },
  { name: 'WATFIV (programming language)' },
  { name: 'WebAssembly' },
  { name: 'WebDNA' },
  { name: 'Whiley (programming language)' },
  { name: 'Winbatch' },
  { name: 'Wolfram Language' },
  { name: 'Wyvern (programming language)' },
  { name: 'X++' },
  { name: 'X10 (programming language)' },
  { name: 'XAML' },
  { name: 'XBase' },
  { name: 'XBase++' },
  { name: 'XBL' },
  { name: 'XC (programming language)' },
  { name: 'XCore XS1' },
  { name: 'XHarbour' },
  { name: 'XL (programming language)' },
  { name: 'Xojo' },
  { name: 'XOTcl' },
  { name: 'XOD (programming language)' },
  { name: 'XPL' },
  { name: 'XPL0' },
  { name: 'XQuery' },
  { name: 'XSB' },
  { name: 'XSharp' },
  { name: 'XSL Transformations' },
  { name: 'Xtend' },
  { name: 'YAML' },
  { name: 'Yorick (programming language)' },
  { name: 'YQL (programming language)' },
  { name: 'Yoix' },
  { name: 'YUI Library' },
  { name: 'Z notation' },
  { name: 'Zebra (programming language)' },
  { name: 'Zeno (programming language)' },
  { name: 'ZetaLisp' },
  { name: 'ZOPL' },
  { name: 'Z shell' },
  { name: 'ZPL (programming language)' },
  { name: 'Z++' },
];