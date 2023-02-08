const chalk = require('chalk')
//a library used to add color to console text output
const yargs = require('yargs')
//requires the yargs library, creates the command line interphase, this is what allows the information from the user (version 12.0.2- had no issue when installing)
const notes = require('./notes.js')
//this just links the notes.js file

// Customize yargs version
yargs.version('1.1.0')


// Create add command, the name of the command, 
//describe = A breif description of what the command does
// builder = an object that specifies the options and arguments for the comands
//handler = A function = its called when th command is excuted , can access the command line arguments passed by the user
//handler takes what the user says and allows it to be done 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
    //we call this function from the attached file notes.js
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(argv) {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demansOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//This method parses the command line arguments passed to the script and reuns the commands based on the users input 


