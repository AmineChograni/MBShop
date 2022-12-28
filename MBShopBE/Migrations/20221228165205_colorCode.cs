using Microsoft.EntityFrameworkCore.Migrations;

namespace MBShopBE.Migrations
{
    public partial class colorCode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Couleurs_Products_ProductId",
                table: "Couleurs");

            migrationBuilder.DropForeignKey(
                name: "FK_Tailles_Products_ProductId",
                table: "Tailles");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "Tailles",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "Couleurs",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "codeColor",
                table: "Couleurs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Couleurs_Products_ProductId",
                table: "Couleurs",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tailles_Products_ProductId",
                table: "Tailles",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Couleurs_Products_ProductId",
                table: "Couleurs");

            migrationBuilder.DropForeignKey(
                name: "FK_Tailles_Products_ProductId",
                table: "Tailles");

            migrationBuilder.DropColumn(
                name: "codeColor",
                table: "Couleurs");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "Tailles",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "Couleurs",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Couleurs_Products_ProductId",
                table: "Couleurs",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tailles_Products_ProductId",
                table: "Tailles",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
