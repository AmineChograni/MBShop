using Microsoft.EntityFrameworkCore.Migrations;

namespace MBShopBE.Migrations
{
    public partial class CommandeUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Label",
                table: "Commandes",
                newName: "LName");

            migrationBuilder.AddColumn<string>(
                name: "FName",
                table: "Commandes",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FName",
                table: "Commandes");

            migrationBuilder.RenameColumn(
                name: "LName",
                table: "Commandes",
                newName: "Label");
        }
    }
}
