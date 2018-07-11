# Guide to good documentation of software libraries

The world needs better documentation of software libraries to support both, professionals and
newbies, with the best information available.

This guide is about best practices on writing one documentation suitable for students (educational grade)
and professionals (quick entry).

## Manifest

- Students and newbies should be provided with the best documentation we have to get started quick
  and develop awesome software. They don't need to experience the same learning curve senior developers did.
  
- Seniors and professionals know other frameworks and techniques. They want to know exactly, how to
  do stuff without reading information they already know.

Although both, seniors and newbies, have different expectations on good documentation, this 

## Global writing guidelines 

- ***In english please***: Write your documention in English so other users can participate.

- ***The shorter - the better***: Provide short information in your primary `README.md` file covering all
  topics of your project. Provide short example snippets with *links* to additional information.

- ***Provide links to professional topics on top***: Don't let professionals read your entire README to 
  find the stuff they want. Most professionals expect the same: Provide *links* to examples on the top of 
  your README.
  
- ***Full working Examples***: Provide ready to copy-n-paste examples. Link them in your `README.md` file
  so everyone interested can find them quickly
  
- ***Detail information***: Provide detailed information about topics in separate files with links to 
  *working examples*
  
- ***CODE b4 PROSA***: Write code-examples including some hints instead of writing books of wisdom
  
 
## Structure of `README.md` *[Example](docs/README.dist.md)*

`README.md` is the first contact point, your project has both with professionals, seniors, newbies and students.
It should provide information for all.

- Project Marketing (max 10 lines): Describe the goals of your Project including
    - Basic example (max 10 lines - or provide a link) 
    - What is the project about, why did you do it
    - Link them to working examples

- Professional Topics (max 15 Lines): Links to professional grade examples or detailed documentation.
  - Use professional language and short cuts
  - This is the professionals only section - don't try teach them stuff here

- Installation (max 5 lines)

- Usage (max 500 lines)
    - Do not overlap with professional topics
    - Start with initialisation (5 lines)
    - Provide short code / prosa to each topic of your library
    - Provide a Details-Link and Working Examples to each section of your document
    
- Contribution guide
    - Ask the reader for suggestions / contributions
    

    