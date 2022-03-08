const path = require('path');
const fs = require('fs');
const mimeType = require('./mimeType');
const { PDFNet } = require('@pdftron/pdfnet-node');
const XLSX = require('xlsx');
const moment = require('moment');
const csvtojson = require('csvtojson');
const paypal = require('paypal-rest-sdk');
const QRCode = require('qrcode');

const filesPath = "../../../FILES/";
const docx = "DOCX/";
const image = "IMAGES/";
const pdfs = "PDFS/";
const pptx = "PPTX/";
const xlsx = "XLSX/";
const jsons = "JSON/";
const tumb = "THUMBNAILS/";
const blas = "BLASONS/";
const avat = "AVATARS/";


// // retreive pdf files

exports.pdff = (req, res, next) => {
    const inputPath = path.resolve(__dirname, filesPath + "" + pdfs, req.params.filename);
    fs.readFile(inputPath, function(err, data) {
        if (err) {
            res.statusCode = 500;
            res.end(`Error getting the file: ${err}.`);
        } else {
            const ext = path.parse(inputPath).ext;
            res.setHeader('Content-type', mimeType[ext] || 'text/plain');
            res.end(data);
        }
    });
};


exports.xlsx_csv = (req, res, next) => {
    // const workBook = XLSX.readFile(inputFilename);
    // XLSX.writeFile(workBook, outputFilename, { bookType: "csv" });
    const workBook = XLSX.readFile(path.join(__dirname, '..', 'FILES/XLSX/eu.xlsx'));
    XLSX.writeFile(workBook, path.join(__dirname, '..', `FILES/CSV/eu_${moment(Date.now()).format("DD_MMMM_YYYY_hh_mm_ss")}.csv`), { bookType: "csv" });

}

// exports.csv_json = (req, res, next)=>{

//   // console.log(path.join(__dirname,'..','FILES/CSV/eu.csv'))
//   csvtojson().fromFile(path.join(__dirname,'..','FILES/CSV/eu.csv')).then(source => {  
//     // Fetching the data from each row  
//     // and inserting to the table "sample" 
//     for (var i = 0; i < source.length; i++) { 
//         var Date_paiement = source[i]["Date paiement"], 
//             Référence_ou_matricule = source[i]["Référence ou matricule"], 
//             Référence_paiement = source[i]["Référence paiement"], 
//             Faculté_Type_paiement = source[i]["Faculté/Type paiement"] 
//             Nom_étudiant = source[i]["Nom étudiant"] 
//             Montant = source[i]["Montant"] 
//             Commentaires = source[i]["Commentaires"] 
//             N_Transaction = source[i]["N° Transaction"] 
//             Agence_Paiement = source[i]["Agence Paiement"] 

//         // script d'insertion dans la bd ici
//         console.log(Date_paiement)
//         console.log(Référence_ou_matricule)
//         console.log(Référence_paiement)
//         console.log(Faculté_Type_paiement)
//         console.log(Nom_étudiant)
//         console.log(Montant)
//         console.log(Commentaires)
//         console.log(N_Transaction)
//         console.log(Agence_Paiement)
//         // Inserting data of current row 
//         // into database 

//     }
//   })
// };


exports.blas = (req, res, next) => {
    const inputPath = path.resolve(__dirname, filesPath + "" + image + "" + blas, req.params.filename);
    fs.readFile(inputPath, function(err, data) {
        if (err) {
            res.statusCode = 500;
            res.end(`Error getting the file: ${err}.`);
        } else {
            const ext = path.parse(inputPath).ext;
            res.setHeader('Content-type', mimeType[ext] || 'text/plain');
            res.end(data);
        }
    });
};

exports.avat = (req, res, next) => {
    const inputPath = path.resolve(__dirname, filesPath + "" + image + "" + avt, req.params.filename);
    fs.readFile(inputPath, function(err, data) {
        if (err) {
            res.statusCode = 500;
            res.end(`Error getting the file: ${err}.`);
        } else {
            const ext = path.parse(inputPath).ext;
            res.setHeader('Content-type', mimeType[ext] || 'text/plain');
            res.end(data);
        }
    });
};
// // files to thumbnail image

exports.thumbnail = (req, res, next) => {

    const MY_LICENSE_KEY = "demo:1636987220692:7899c2e90300000000e9539cc95179d9476355757b165ea46fda3bd8cc";
    //const filename = req.params.filename;
    //let ext = path.parse(filename).ext;

    const inputPath = path.resolve("../tadc-server/FILES/PDFS/ticket_replaced.pdf");
    const outputPath = path.resolve("../tadc-server/FILES/PDFS/ticket_replaced.png");
    // const inputPath = path.resolve(__dirname, filesPath+""+pdfs, filename);
    // const outputPath = path.resolve(__dirname, filesPath+""+image+""+tumb, `${filename}.png`);
    // if (ext !== '.pdf') {
    //   throw `Only PDFs can return a thumbnail. Cannot return a thumb for a file with extension: ${ext}.`;
    // }

    const main = async() => {
        const doc = await PDFNet.PDFDoc.createFromFilePath(inputPath);
        await doc.initSecurityHandler();
        const pdfdraw = await PDFNet.PDFDraw.create(92);
        const currPage = await doc.getPage(1);
        await pdfdraw.export(currPage, outputPath, 'PNG');

    };

    PDFNetEndpoint(main, outputPath, res, MY_LICENSE_KEY);
};

// // thumbnail function

const PDFNetEndpoint = (main, pathname, res, KEY) => {
    PDFNet.runWithCleanup(main, KEY)
        .then(() => {
            PDFNet.shutdown();
            fs.readFile(pathname, (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                } else {
                    //const ext = path.parse(pathname).ext;
                    res.setHeader('ContentType', 'image/png');
                    //res.setHeader('Content-type', mimeType[ext] || 'text/plain'); 
                    res.end(data);
                }
            });
        })
        .catch((err) => {
            res.statusCode = 500;
            res.end(err);

        });
};

const PDFNetEndpoint1 = (main, res, req, next) => {
    const MY_LICENSE_KEY = "demo:1636987220692:7899c2e90300000000e9539cc95179d9476355757b165ea46fda3bd8cc"

    PDFNet.runWithCleanup(main)
        //ePDFNet.runWithCleanup(main)
        .then(() => {
            PDFNet.shutdown();
            //console.log(trans)
            res.status(200).json({ message: req.body.lang === 'en' ? "Certification completed with success" : "Certification terminée avec succès" })
        })
        .catch(function(error) {
            console.log('Error: ' + JSON.stringify(error));
        })
};

/////////// ####################### //////////////////////////////////


/////////// #######################  //////////////////////
// generate pdf from template   

exports.receiptEditor = async(req, res, next) => {


    const MY_LICENSE_KEY = "demo:1636987220692:7899c2e90300000000e9539cc95179d9476355757b165ea46fda3bd8cc";

    const inputPath = path.resolve('../tadc-server/FILES/PDFS/ticket.pdf');
    const inputURL = path.resolve('../tadc-server/FILES/PDFS/e_ticket.png');
    const outputPath = path.resolve('../tadc-server/FILES/PDFS/ticket_replaced.pdf');

    const commandID = qrCodeHanler(req, res, next);


    const replaceText = async() => {

        try {
            const pdfdoc = await PDFNet.PDFDoc.createFromFilePath(inputPath);
            await pdfdoc.initSecurityHandler();
            const replacer = await PDFNet.ContentReplacer.create();
            const page = await pdfdoc.getPage(1);
            ///
            const builder = await PDFNet.ElementBuilder.create(); // ElementBuilder, used to build new element Objects
            ///
            // create a new page writer that allows us to add/change page elements

            const writer = await PDFNet.ElementWriter.create(); // ElementWriter, used to write elements to the page
            /////
            // define new page dimensions
            writer.beginOnPage(page, PDFNet.ElementWriter.WriteMode.e_overlay);

            /////

            // Adding a PNG image to output file
            let img = await PDFNet.Image.createFromFile(pdfdoc, inputURL);
            let imgWidth = await img.getImageWidth();
            let imgHeight = await img.getImageHeight();
            let element = await builder.createImageScaled(img, 500, 50, imgWidth / 3, imgHeight / 3);
            writer.writePlacedElement(element);
            await writer.end();

            await replacer.addString('present', 'moi');
            await replacer.addString('destination', 'de paris à beaurdaux ');
            await replacer.addString('data.name', 'ndjekoua');
            await replacer.addString('surname', 'frank');
            await replacer.addString('traveller', 'teenager');
            await replacer.addString('travel_file', 'ghjjI899nn');
            await replacer.addString('Customer_reference', '32111');
            await replacer.addString('amounte', `${commandID}`);
            await replacer.addString('e_tiket_number', '24522233333');
            await replacer.addString('warning', 'blablabla');
            await replacer.addString('departure_point', "paris charles de gaules");
            await replacer.addString('arrival_point', "gare de lyon");
            await replacer.addString('pickup_date', "13-01-2022");
            await replacer.addString('pickUp_hour', "12Uhr");
            await replacer.addString('taxi_description', "billet non echangeable");
            await replacer.addString('disclaimer', "etre ponctuelle");
            await replacer.process(page);

            pdfdoc.save(outputPath, PDFNet.SDFDoc.SaveOptions.e_linearized);


        } catch (err) {

            console.log(err);
        }

    };

    PDFNet.runWithCleanup(replaceText, MY_LICENSE_KEY)
        .then(() => {
            // Optional alternative to call initialize directly 
            PDFNet.initialize(MY_LICENSE_KEY);
            //PDFNet.shutdown();
            // fs.readFile(outputPath, (err, data) => {
            //     if (err) {
            //       console.log("25 pdf ####### ERROR ###########")
            //         res.statusCode = 500; 
            //         res.end(err);
            //     } else {
            //       console.log("1 pdf  ####### status OK  ###########")

            //         res.setHeader('ContentType', 'application/pdf');    

            //         res.end(data); 

            //     }
            // });
            console.log("pdf edition completed with success")
                //res.status(200).json({message:req.body.lang === 'en'?"pdf edition completed with success":"Edition du pdf terminée avec succès"})
        })
        .catch(err => {
            console.log("Sorry an error occur, please try again")
                //res.status(422).json({ message:req.body.lang === 'en'?"Sorry an error occur, please try again":"Désolé une erreur est survenu, s'il vous plait veuillez reéssayer"})
        });

    return commandID;
};

exports.downloadMethod = async(res, req) => {

    var filePath = "../FILES/PDFS/ticket.pdf";
    var fileName = "ticket.pdf";


    res.download(filePath, fileName);

};

// // generate pdf from zero 

// app.get('/generate/:filename', (req, res) => {
//   const filename = req.params.filename;
//   const outputPath = path.resolve(__dirname, filesPath, `${filename}.pdf`);
//   const main = async () => {
//     const pdfdoc = await PDFNet.PDFDoc.create();
//     await pdfdoc.initSecurityHandler();
//     const page1 = await pdfdoc.pageCreate();
//     pdfdoc.pagePushBack(page1);
//     pdfdoc.save(
//       outputPath,
//       PDFNet.SDFDoc.SaveOptions.e_linearized,
//     );
//   };

//   PDFNetEndpoint(main, outputPath, res);
// });


// // filigrammer un pdf

// app.get('/watermark/:filename-:watermark', (req, res) => {
//   const filename = req.params.filename;
//   const watermark = req.params.watermark;
//   let ext = path.parse(filename).ext;

//   if (ext !== '.pdf') {
//     res.statusCode = 500;
//     res.end(`File is not a PDF. Please convert it first.`);
//   }

//   const inputPath = path.resolve(__dirname, filesPath, filename);
//   const outputPath = path.resolve(__dirname, filesPath, `${filename}_watermarked.pdf`);

//   const main = async () => {
//     const pdfdoc = await PDFNet.PDFDoc.createFromFilePath(inputPath);
//     await pdfdoc.initSecurityHandler();

//     const stamper = await PDFNet.Stamper.create(
//       PDFNet.Stamper.SizeType.e_relative_scale,
//       0.5,
//       0.5,
//     ); // Stamp size is relative to the size of the crop box of the destination page
//     stamper.setAlignment(
//       PDFNet.Stamper.HorizontalAlignment.e_horizontal_center,
//       PDFNet.Stamper.VerticalAlignment.e_vertical_center,
//     );
//     const redColorPt = await PDFNet.ColorPt.init(1, 0, 0);
//     stamper.setFontColor(redColorPt);
//     const pgSet = await PDFNet.PageSet.createRange(1, await pdfdoc.getPageCount());
//     stamper.stampText(pdfdoc, watermark, pgSet);

//     pdfdoc.save(
//       outputPath,
//       PDFNet.SDFDoc.SaveOptions.e_linearized,
//     );
//   };

//   PDFNetEndpoint(main, outputPath, res);
// });

// exports.addQr_Code = async(req, res, next) => {

//   const inputPath = path.resolve('../tadc-server/FILES/PDFS/ticket.pdf');
//   const inputURL = path.resolve('../tadc-server/FILES/PDFS/e_ticket.png');
//   const outputPath = path.resolve('../tadc-server/FILES/PDFS/ticket_replaced.pdf');
//   const MY_LICENSE_KEY = "demo:1636987220692:7899c2e90300000000e9539cc95179d9476355757b165ea46fda3bd8cc"
//   const qrCodeGenerator = async() => {
//     try {


//             const pdfdoc = await PDFNet.PDFDoc.createFromFilePath(inputPath);
//             await pdfdoc.initSecurityHandler();            
//             const page = await pdfdoc.getPage(1);
//             const builder = await PDFNet.ElementBuilder.create(); // ElementBuilder, used to build new element Objects
//             // create a new page writer that allows us to add/change page elements

//             const writer = await PDFNet.ElementWriter.create(); // ElementWriter, used to write elements to the page
//             // define new page dimensions

//             writer.beginOnPage(page, PDFNet.ElementWriter.WriteMode.e_overlay);

//             // Adding a PNG image to output file
//              let img = await PDFNet.Image.createFromFile(pdfdoc, inputURL);
//              let imgWidth = await img.getImageWidth();
//              let imgHeight = await img.getImageHeight(); 
//              let element = await builder.createImageScaled(img, 500, 50, imgWidth/3, imgHeight/3);
//              writer.writePlacedElement(element); 

//              await writer.end();
//              //pdfdoc.pagePushBack(page); 
//              await pdfdoc.save(outputPath, PDFNet.SDFDoc.SaveOptions.e_linearized); 


//         } catch (err) {
//           console.log(err);
//         }
//   };
//   PDFNet.runWithCleanup(qrCodeGenerator, MY_LICENSE_KEY)
// }

const qrCodeHanler = (req, res, next) => {

    var { nanoid } = require("nanoid"); //Import the nanoid library
    var ID = nanoid(8); //generate a 6 character url unique id 


    const main = async text => {

        try {
            await QRCode.toFile('../tadc-server/FILES/PDFS/e_ticket.png', text);

        } catch (err) {
            console.log(err);
        }

    }

    main("   Detail de reservation: \r" +
        "-------------------------" +
        "\r" +
        "\r" +
        " Command ID : " + `${ID}` + " \r " +
        " E_tiket : 123333");

    return ID;

};