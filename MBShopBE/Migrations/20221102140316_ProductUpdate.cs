using Microsoft.EntityFrameworkCore.Migrations;

namespace MBShopBE.Migrations
{
    public partial class ProductUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Products",
                newName: "Imagetwo");

            migrationBuilder.AddColumn<string>(
                name: "ImageMain",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Imageone",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Imagethree",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageMain",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Imageone",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Imagethree",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "Imagetwo",
                table: "Products",
                newName: "Image");
        }
    }
}
