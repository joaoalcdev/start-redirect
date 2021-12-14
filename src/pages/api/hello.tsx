/* eslint-disable import/no-anonymous-default-export */
export default (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string }): any; new(): any } } }) => {
  return res.status(200).json({
    message: 'Hello world!'
  })
}
