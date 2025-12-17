-- =============================================
-- Author:      <Author, , Name>
-- Create Date: <Create Date, , >
-- Description: <Description, , >
-- =============================================
CREATE PROCEDURE CriarDetranAcesso
(
    -- Add the parameters for the stored procedure here
    @cnpj varchar(30),
	@token varchar(MAX),
	@usuario varchar(30),
	@uf varchar(2)
)
AS
BEGIN
    
	begin tran
		if exists (select * from DetranAcesso where Empresa_Id = (select Id from Pessoa e where e.CpfCnpj = @cnpj))
		begin
		   UPDATE DetranAcesso set Token = @token, UltimaAtualizacao = GETDATE(), Ativo = 1, Usuario = @usuario, Uf = @uf 
		   WHERE Empresa_Id = (select Id from Pessoa e where e.CpfCnpj = @cnpj)
		end
		else
		begin
		   INSERT INTO DetranAcesso (Id,UltimaAtualizacao,Ativo,ExpiracaoToken,Token,Empresa_Id, Uf, Usuario) 
		   Values(newid(),GETDATE(),1,9999, @token , (select Id from Pessoa e where e.CpfCnpj = @cnpj), @uf, @usuario)
		end
	commit tran

	

END
go
