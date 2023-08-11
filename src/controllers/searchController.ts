import { Request, Response } from 'express'
import {Pet} from '../models/pet'
import { createMenuObject } from '../helpers/createMenuObject'

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string
    if(!query){
        res.redirect('/') //caso pesquisa em branco
        return //parar a execução
    }
    let list = Pet.getFromName(query)
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query // para manter o input o que se digitou
    })
}