import express from 'express'
import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import {promisify} from 'util'

const moveAsync = promisify(fs.rename)

const MAX_FILE_SIZE = 2097152

export const uploadFileHandler = (req: express.Request, res: express.Response) => {
  // Create new form handler
  const form = new formidable.IncomingForm()

  // Parse req
  form.parse(req, async (err, fields, files) => {    
    // Check error
    if (err) {
      console.error('unable to receive upload file:', err)
      // TODO: Handle error
      const resBody = {
        status: 'ERROR',
        code: '500',
        message: 'Internal Error'
      }
      res.statusCode = 500
      res.send(resBody)
      return
    }
  
    // Validate file available
    if (!files.file) {
      const resBody = {
        status: 'ERROR',
        code: 'ASSET1',
        message: 'No file uploaded'
      }
      res.statusCode = 400
      res.send(resBody)
      return
    }

    // Get file
    let tempFile = files.file
    let targetPath = __dirname

    switch (fields.context) {
      case '1': {
        // Validate size
        if (tempFile.size > MAX_FILE_SIZE) {
          const resBody = {
            status: 'ERROR',
            code: 'ASSET3',
            message: 'File too big'
          }
          res.statusCode = 400
          res.send(resBody)
          return
        }

        // Validate file type
        if (!tempFile.type.match(/image\/(png|jpeg|jpg)/)) {
          const resBody = {
            status: 'ERROR',
            code: 'ASSET4',
            message: 'Invalid file type'
          }
          res.statusCode = 400
          res.send(resBody)
          return
        }

        // File is valid, Set target path
        targetPath += '/uploads/todo'
        break
      } default: {
        const resBody = {
          status: 'ERROR',
          code: 'ASSET2',
          message: 'Unknown asset context'
        }
        res.statusCode = 400
        res.send(resBody)
        return
      }
    }

    // Generate random file name using unix epoch
    let fileExt = path.extname(tempFile.name)
    let fileName = new Date().getTime() + fileExt


    // Store file to storage
    let filePath = targetPath + '/' + fileName
    await moveAsync(tempFile.path, filePath)

    let resBody = {
      status: 'OK',
      data: {
        file_name: fileName,
        file_url: '',
        checksum: '',
        checksum_type: 'MD5'
      }
    }

    res.send(resBody)
  })

}