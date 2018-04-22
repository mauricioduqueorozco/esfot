'use strict'

const path = require('path')
const course = require('course')
const st = require('st')
const formidable = require('formidable')
const util = require('util')
const os = require('os')
const fs = require('fs')

const router = course()
const mount = st({
  path: path.join(__dirname, '..', 'public'),
  index: 'index.html',
  passthrough: true
})

router.post('/TET317L_CPR2', function (req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.write('received upload:\n\n')
      res.end(util.inspect({fields: fields, files: files}))
  })

  form.on('file', function(name, file) {
     fs.readFile(file.path, function(err, data) {
       fs.writeFile(path.join("./FILES_UPLOADED/TET317L_CPR2", file.name), data, function(err) {
         fs.unlink(file.path, function(err) {
            if (err) res.end({'success': false});
            else res.end({'success': true});
          })
       })
     })
  })

})

router.post('/TEM425L_CPR1', function (req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.write('received upload:\n\n')
      res.end(util.inspect({fields: fields, files: files}))
  })

  form.on('file', function(name, file) {
     fs.readFile(file.path, function(err, data) {
       fs.writeFile(path.join("./FILES_UPLOADED/TEM425L_CPR1", file.name), data, function(err) {
         fs.unlink(file.path, function(err) {
            if (err) res.end({'success': false});
            else res.end({'success': true});
          })
       })
     })
  })

})

router.post('/TEM425L_CPR2', function (req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.write('received upload:\n\n')
      res.end(util.inspect({fields: fields, files: files}))
  })

  form.on('file', function(name, file) {
     fs.readFile(file.path, function(err, data) {
       fs.writeFile(path.join("./FILES_UPLOADED/TEM425L_CPR2", file.name), data, function(err) {
         fs.unlink(file.path, function(err) {
            if (err) res.end({'success': false});
            else res.end({'success': true});
          })
       })
     })
  })

})

router.post('/TEM315L_CPR1', function (req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.write('received upload:\n\n')
      res.end(util.inspect({fields: fields, files: files}))
  })

  form.on('file', function(name, file) {
     fs.readFile(file.path, function(err, data) {
       fs.writeFile(path.join("./FILES_UPLOADED/TEM315L_CPR1", file.name), data, function(err) {
         fs.unlink(file.path, function(err) {
            if (err) res.end({'success': false});
            else res.end({'success': true});
          })
       })
     })
  })

})

router.post('/TEM315L_CPR2', function (req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.write('received upload:\n\n')
      res.end(util.inspect({fields: fields, files: files}))
  })

  form.on('file', function(name, file) {
     fs.readFile(file.path, function(err, data) {
       fs.writeFile(path.join("./FILES_UPLOADED/TEM315L_CPR2", file.name), data, function(err) {
         fs.unlink(file.path, function(err) {
            if (err) res.end({'success': false});
            else res.end({'success': true});
          })
       })
     })
  })

})

router.post('/TEM212_GR2', function (req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.write('received upload:\n\n')
      res.end(util.inspect({fields: fields, files: files}))
  })

  form.on('file', function(name, file) {
     fs.readFile(file.path, function(err, data) {
       fs.writeFile(path.join("./FILES_UPLOADED/TEM212_GR2", file.name), data, function(err) {
         fs.unlink(file.path, function(err) {
            if (err) res.end({'success': false});
            else res.end({'success': true});
          })
       })
     })
  })

})

router.post('/TEM212_GR4', function (req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.write('received upload:\n\n')
      res.end(util.inspect({fields: fields, files: files}))
  })

  form.on('file', function(name, file) {
     fs.readFile(file.path, function(err, data) {
       fs.writeFile(path.join("./FILES_UPLOADED/TEM212_GR4", file.name), data, function(err) {
         fs.unlink(file.path, function(err) {
            if (err) res.end({'success': false});
            else res.end({'success': true});
          })
       })
     })
  })

})

router.post('/TET412_GR2', function (req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.write('received upload:\n\n')
      res.end(util.inspect({fields: fields, files: files}))
  })

  form.on('file', function(name, file) {
     fs.readFile(file.path, function(err, data) {
       fs.writeFile(path.join("./FILES_UPLOADED/TET412_GR2", file.name), data, function(err) {
         fs.unlink(file.path, function(err) {
            if (err) res.end({'success': false});
            else res.end({'success': true});
          })
       })
     })
  })

})



function onRequest (req, res) {
  mount(req, res, function (err) {
    if (err) return fail(err, res)

    router(req, res, function (err) {
      if (err) return fail(err, res)

      res.statusCode = 404
      res.end(`404 Not Found: ${req.url}`)
    })
  })
}

function fail (err, res) {
  res.statusCode = 500
  res.setHeader('Content-Type', 'text/plain')
  res.end(err.message)
}

module.exports = onRequest
